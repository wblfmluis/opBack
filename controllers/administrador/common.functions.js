const jwtDecode = require("jwt-decode");

const decodeToken = async (token) => {
  try {
    let identity = jwtDecode(token);
    if (identity.idUsuario) {
      return identity;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

module.exports = {
  decodeToken,
};
