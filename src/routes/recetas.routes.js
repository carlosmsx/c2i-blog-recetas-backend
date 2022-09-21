import {Router} from 'express';
import { listarRecetas, crearReceta, obtenerReceta, borrarReceta, editarReceta } from '../controllers/recetas.contoller';
//import {check} from 'express-validator';
//import validarReceta from '../helpers/validacionReceta';

const router = Router();

//crear todas las rutas que tienen que ver con las recetas
router.route('/recetas')
.get(listarRecetas)
.post(crearReceta);


router.route('/recetas/:id')
.put(editarReceta) //TODO: agregar validaciones aqui tambien
.delete(borrarReceta)
.get(obtenerReceta);

export default router;