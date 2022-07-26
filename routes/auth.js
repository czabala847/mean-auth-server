const { Router } = require("express");
const { createUser, login, renew } = require("../controllers/auth");

const router = Router();

//Crear un nuevo usuario
router.post("/new", createUser);

//Login de usuario
router.post("/", login);

//Validar y revalidar token
router.get("/renew", renew);

module.exports = router;
