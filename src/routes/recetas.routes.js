import {Router} from 'express';
import { listarRecetas, crearReceta, obtenerReceta } from '../controllers/recetas.contoller';
//import {check} from 'express-validator';
//import validarProducto from '../helpers/validacionProducto';

const router = Router();

//crear todas las rutas que tienen que ver con los productos
router.route('/recetas')
.get(listarRecetas)
.post(crearReceta);


router.route('/recetas/:id')
.get(obtenerReceta);
/*
.put(editarProducto) //TODO: agregar validaciones aqui tambien
.delete(borrarProducto);
*/

export default router;