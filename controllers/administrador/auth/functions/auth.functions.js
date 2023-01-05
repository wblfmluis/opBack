const opDb = require("../../../../models/operadoresDB");
const errorHandler = require("../../../../config/db/dbError.handler");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const mailTools = require("../../../../config/email/mailSender.function");
const jwt = require("jsonwebtoken");
const srcJwt = require("../../../../config/auth/auth.config");

const loginProcess = async (inputData) => {
  try {
    let userData = await opDb.models.admUsuarios.findOne({
      where: { user: inputData.email, status: { [Sequelize.Op.not]: 0 } },
    });
    console.log(userData.dataValues);
    if (Object.keys(userData.dataValues).length === 0) {
      return {
        result: false,
        code: 404,
        message: "El usuario no existe, intente de nuevo",
      };
    }
    if (parseInt(userData.dataValues.status) === 2) {
      let upgradeResult = await upgradeUser(
        userData.dataValues.id,
        userData.dataValues.user
      );
      if (upgradeResult) {
        return {
          result: true,
          code: 202,
          message:
            "Por su seguridad hemos enviado una nueva contraseña al correo electrónico registrado, siga las instrucciones.",
        };
      } else {
        return {
          result: false,
          code: 500,
          message:
            "Ocurrió un error al actualizar su usuario, contacte a soporte de Operadores.com",
        };
      }
    }
    if (!bcrypt.compareSync(inputData.password, userData.dataValues.password)) {
      return {
        result: false,
        code: 401,
        message: "Contraseña incorrecta",
      };
    }
    let token = {
      token: jwt.sign(
        {
          idUsuario: userData.dataValues.id,
          email: userData.dataValues.user,
          user: `${userData.dataValues.nombre} ${userData.dataValues.apellido}`,
        },
        srcJwt.secret,
        { expiresIn: 86400 }
      ),
    };
    return {
      result: true,
      message: token,
      code: 200,
    };
  } catch (e) {
    await errorHandler.saveError("loginProcess", inputData, e);
    return {
      result: false,
      code: 500,
      message: e,
    };
  }
};

const passwordRecovery = async (inputData) => {
  let newPassword = generatePassword();
  let updateUser = await opDb.models.admUsuarios.update(
    {
      password: bcrypt.hashSync(newPassword, 8),
    },
    {
      where: {
        user: inputData.email,
      },
    }
  );
  if (updateUser) {
    console.log("Enviar Mail de confirmación");
    let emailData = {
      to: inputData.email,
      subject: "Equipo de Operadores.com || Recuperación de contraseña",
      htmlMessage: `<p>Su nuevo password: ${newPassword}</p>`,
    };
    let emailResult = await mailTools.sendEmail(emailData);
    return emailResult.result === true;
  } else {
    return false;
  }
};

const upgradeUser = async (idUsuario, user) => {
  let newPassword = generatePassword();
  let updateUser = await opDb.models.admUsuarios.update(
    {
      password: bcrypt.hashSync(newPassword, 8),
      status: 1,
    },
    {
      where: {
        id: idUsuario,
      },
    }
  );
  if (updateUser) {
    console.log("Enviar Mail de confirmación");
    let emailData = {
      to: user,
      subject: "Equipo de Operadores.com || Su nueva contraseña",
      htmlMessage: `<p>Su nuevo password: ${newPassword}</p>`,
    };
    let emailResult = await mailTools.sendEmail(emailData);
    return emailResult.result === true;
  } else {
    return false;
  }
};

const generatePassword = () => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = {
  loginProcess,
  passwordRecovery,
};
