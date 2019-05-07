// Se importa el modelo

let Valores = require('../Models/ProjectModel')

// Se crea un objeto controller tipo Json 

let controller = {
  getList: function(rel,res){
    Valores.find({}).exec((err,valores)=>{
        if(err){
            return res.status(500).send({
                mensaje: "Error al devolver los datos"
            });
        }
        if(!valores){
            return res.status(404).send({
                mensaje: "No hay proyectos"
            });
        }
        return res.status(200).send({valores});
    });
}
};

module.exports = controller;