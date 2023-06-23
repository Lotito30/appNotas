const express = require('express')
const router = express.Router()
const notasController = require('../controllers/notasController')

router.get('/',notasController.mostrarNotas)
router.post('/',notasController.guardarNota)

router.get('/formularioNota',notasController.crearNota)

router.get('/editarNota/:id',notasController.editarNota)
router.post('/:id',notasController.actualizarNota)

router.post('/borrar/:id',notasController.borrarNota)



module.exports = router