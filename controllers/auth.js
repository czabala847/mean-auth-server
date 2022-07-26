const { response } = require("express");

const createUser = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Crear usuario /new",
  });
};

const login = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Login de usuario /",
  });
};

const renew = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Renew",
  });
};

module.exports = {
  createUser,
  login,
  renew,
};
