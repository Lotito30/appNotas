const path = require('path')
const express = require('express')

const app = express()
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/preguntas', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/preguntas.html'))
});
app.listen(3000, () => 
    console.log("Servidor Corriendo")
);


