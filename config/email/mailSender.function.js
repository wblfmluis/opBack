const nodeMailer = require("nodemailer");
const mailConfig = require("./email.config");
const opDb = require("../../models/operadoresDB");

const sendEmail = async (mailValues) => {
  let transporter = nodeMailer.createTransport(mailConfig);

  try {
    let email = await transporter.sendMail({
      from: `Operadores.com <luis@wiboo.com.mx>`,
      to: `${mailValues.to}`,
      subject: `${mailValues.subject}`,
      html: `${mailValues.htmlMessage}`,
    });
    if (email.messageId) {
      await opDb.models.mailLog.create({
        from: `system@operadores.com`,
        to: `${mailValues.to}`,
        responseState: "SUCCESS",
        messageId: email.messageId,
      });
      return {
        result: true,
        message: "Email enviado con éxito",
        emailID: email.messageId,
        emailResponse: email.response,
      };
    }
  } catch (e) {
    let error = `Error al enviar el email: ${e}`;
    console.log(error);
    await opDb.models.mailLog.create({
      from: `${mailValues.from}`,
      to: `${mailValues.to}`,
      responseState: "FAILED",
      messageId: null,
      emailResponse: e,
    });
    return {
      result: false,
      message: e.message,
    };
  }
};

module.exports = {
  sendEmail,
};
