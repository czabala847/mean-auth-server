const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createUser = async (req, res = response) => {
  const { email, name, password } = req.body;

  try {
    //Verificar el email
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe con ese email.",
      });
    }

    //Crear usuario con el modelo
    const dbUser = new User(req.body);

    //Hash password
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync(password, salt);

    //Generar JWT

    //Crear usuario en BD
    await dbUser.save();

    //Generar respuesta exitosa
    return res.status(201).json({
      ok: true,
      uid: dbUser.id,
      name,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Ocurrio un error, contacte con el administrador.",
    });
  }

  return res.json({
    ok: true,
    msg: "Crear usuario /new",
  });
};

const login = (req, res = response) => {
  const { email, password } = req.body;

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
