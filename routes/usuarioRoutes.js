const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')

router.get('/iniciarSesion',usuarioController.iniciarSesion)
router.get('/recuperarContrasena',usuarioController.recuperarContrasena)
router.get('/registrarse',usuarioController.registrarUsuario)

module.exports = router

