const express = require('express')
const router = express.Router()
const notasController = require('../controllers/notasController')

router.get('/',notasController.mostrarNotas)

router.get('/formularioNota',notasController.crearNotas)
router.post('/',notasController.guardarNota)

module.exports = router