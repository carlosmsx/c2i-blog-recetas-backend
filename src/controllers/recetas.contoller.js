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