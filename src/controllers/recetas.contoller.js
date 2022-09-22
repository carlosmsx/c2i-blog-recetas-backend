import Receta from "../models/receta";

export const listarRecetas = async(req,res)=> {
    try {
        //buscar en la DB la 'collection' de recetas
        const recetas = await Receta.find();

        //enviar la respuesta al frontend
        res.status(200).json(recetas);

    } catch (error) {
        res.status(404).json({ mensaje: "Error al buscar las recetas" });
    }
}

export const crearReceta = async(req,res) => {
    try{
        //crear un objeto para guardar en la DB
        const receta = new Receta(req.body);

        //guardar efectivamente
        await receta.save();

        //enviar respuesta al frontend
        res.status(201).json({ mensaje: "receta creada exitosamente" });

        //si algo falla tambien enviar una respuesta
    } catch (error) {
        res.status(400).json({
            mensaje: "La receta no pudo ser creada",
        });
    }
}

export const obtenerReceta = async(req,res)=>{
    try {
        //buscar en la DB la receta
        const receta = await Receta.findById(req.params.id);

        //enviar la respuesta al frontend
        res.status(200).json(receta);
    } catch (error) {
        res.status(404).json({ mensaje: "receta no encontrada" });
    }
}

export const borrarReceta = async(req,res)=>{
    try {
        //buscar la receta por el id y luego borrarla
        await Receta.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: "la receta fue eliminada correctamente"});
    } catch (error) {
        res.status(400).json({mensaje: 'Error al intentar borrar la receta'});
    }
}

export const editarReceta = async(req,res)=>{
    try {
        //validar
        console.log(req.params.id);
        console.log(req.body);

        //buscar
        await Receta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: "edicion ok"});
    } catch (error) {
        console.log(error);
        res.status(400).json({mensaje:"edicion error"});
    }
}