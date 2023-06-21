const fs = require('fs');
const path = require('path');

const notasListPath = path.resolve(__dirname,"../data/notas.json");
const notasList = JSON.parse(fs.readFileSync(notasListPath,'utf-8'));

const notasController = {
    mostrarNotas: (req,res) =>{
        let title ='Notas - Bloc de notas'
        res.render('nota',{title:title,notas:notasList})
    },
    crearNotas: (req,res) =>{
      let title ='Crear notas'
      res.render('notas/formularioNota', {title:title})    
    },
    guardarNota:(req,res) =>{
      let nota = req.body
      nota['id'] = parseInt(notasList[notasList.length - 1].id) + 1
      notasList.push(nota)
      fs.writeFileSync(notasListPath,JSON.stringify(notasList,null,2))
      res.redirect('/')
    }
}

module.exports = notasController