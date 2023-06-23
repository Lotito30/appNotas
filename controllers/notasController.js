const fs = require("fs");
const path = require("path");

const notasListPath = path.resolve(__dirname, "../data/notas.json");
const notasList = JSON.parse(fs.readFileSync(notasListPath, "utf-8"));

const notasController = {
  mostrarNotas: (req, res) => {
    const title = "Notas - Bloc de notas";
    res.render("index", { title: title, notas: notasList });
  },
  detalleProducto: (req, res) => {
    const title = "Notas - Bloc de notas";
    const id = req.params.id;
    const mostrarNota = notasList.find((nota) => nota.id === id);
    res.render("notas/detalleNota", { title: title, notas: mostrarNota });
  },
  crearNota: (req, res) => {
    const title = "Crear notas - Bloc de notas";
    res.render("notas/formularioNota", { title: title });
  },
  guardarNota: (req, res) => {
    const nota = req.body;
    if (notasList.length > 0) {
      nota["id"] = (
        parseInt(notasList[notasList.length - 1].id) + 1
      ).toString();
    } else nota["id"] = "1";
      nota["creacion"] = new Date(Date.now()).toDateString().toString()
    notasList.push(nota);
    fs.writeFileSync(notasListPath, JSON.stringify(notasList, null, 2));
    res.redirect("/notas");
  },
  editarNota: (req, res) => {
    const title = "Editar notas - Bloc de notas";
    const id = req.params.id;
    const notaEditar = notasList.find((nota) => nota.id === id);
    res.render("notas/editarNota", { title: title, nota: notaEditar });
  },
  actualizarNota: (req, res) => {
    const id = req.params.id;
    const { titulo, textarea } = req.body;
    const notaActualizar = notasList.find((nota) => nota.id == id);
    notaActualizar.titulo = titulo;
    notaActualizar.textarea = textarea;
    fs.writeFileSync(notasListPath, JSON.stringify(notasList, null, 2));
    res.redirect("/notas");
  },
  borrarNota: (req, res) => {
    const id = req.params.id;
    const indice = notasList.findIndex((nota) => nota.id === id);
    notasList.splice(indice, 1);
    fs.writeFileSync(notasListPath, JSON.stringify(notasList, null, 2));
    res.redirect("/notas");
  },
};

module.exports = notasController;
