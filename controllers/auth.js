const { response } = require("express");

const createUser = (req, res = response) => {
  const { email, name, password } = req.body;
  console.log(email, name, password);

  return res.json({
    ok: true,
    msg: "Crear usuario /new",
  });
};

const login = (req, res = response) => {
  const { email, password } = req.body;

  console.log(email, password);

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