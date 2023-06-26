const fs = require("fs");
const path = require("path");

const notasListPath = path.resolve(__dirname, "../data/notas.json");
const notasList = JSON.parse(fs.readFileSync(notasListPath, "utf-8"));

const mainController = {
  index: (req, res) => {
    let title = "Bloc de Notas";
    res.render("index", { title: title, notas: notasList });
  },
  preguntas: (req, res) => {
    let title = "Preguntas Frecuentes";
    res.render("preguntas", { title: title });
  }
};

module.exports = mainController;
