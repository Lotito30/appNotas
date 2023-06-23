const path = require("path");
const express = require("express");
const mainRoutes = require("./routes/mainRoutes");
const notasRoutes = require("./routes/notasRoutes");

const PORT = process.env.PORT || 3000;
const app = express();

// configura el middleware para procesar los datos enviados en el cuerpo de una solicitud HTTP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// poder procesar los datos en ejs y la carpeta views
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//hacer estatica la carpeta 'public'
app.use(express.static("public"));

// mainRoutes
app.use("/", mainRoutes);
app.use("/notas", notasRoutes);

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'views/index.html'))
// })

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

