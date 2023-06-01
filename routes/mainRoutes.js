const express = require('express')

const mainRoutes = express.Router()

const mainController = require('../controllers/mainController')

mainRoutes.get('/',mainController.index)
mainRoutes.get('/preguntas',mainController.preguntas)
mainRoutes.get('/iniciosesion',mainController.inicioSesion)

module.exports = mainRoutes
