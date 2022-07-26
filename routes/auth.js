const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, login, renew } = require("../controllers/auth");
const { validateFields } = require("../middlewares/validateFields");
const { validateToken } = require("../middlewares/validateToken");

const router = Router();

//Crear un nuevo usuario
router.post(
  "/new",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    check("name", "El campo nombre es obligatorio").not().isEmpty(),
    validateFields,
  ],
  createUser
);

//Login de usuario
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    validateFields,
  ],
  login
);

//Validar y revalidar token
router.get("/renew", validateToken, renew);

module.exports = router;
