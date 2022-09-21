import Receta from "../models/receta";

export const listarRecetas = (req,res)=> {
    res.send('listarRecetas');
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