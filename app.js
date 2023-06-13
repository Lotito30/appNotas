const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.static('public'));

const mainRoutes = require('./routes/mainRoutes')

app.use('/',mainRoutes)


// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'views/index.html'))
// })

// app.get('/index', function (req, res) {
//   res.sendFile(path.join(__dirname, 'views/index.html'))
// })

// app.get('/preguntas', function(req, res) {
//   res.sendFile(path.join(__dirname, 'views/preguntas.html'))
// });

app.listen(PORT, () => 
    console.log("Servidor Corriendo")
);


