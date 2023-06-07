const path = require('path')

const mainController = {
      index:(req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'))
    },
    preguntas:(req, res) => {
        res.sendFile(path.join(__dirname, '../views/preguntas.html'))
      },
    inicioSesion:(req, res) => {
        res.sendFile(path.join(__dirname, '../views/inicioSesion.html'))
      },
}

module.exports = mainController