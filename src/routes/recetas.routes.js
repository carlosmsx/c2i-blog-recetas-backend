import {Router} from 'express';
import { listarRecetas, crearReceta } from '../controllers/recetas.contoller';
//import { crearProducto, listarProductos, obtenerProducto, editarProducto, borrarProducto } from '../controllers/productos.controllers';
//import {check} from 'express-validator';
//import validarProducto from '../helpers/validacionProducto';

const router = Router();

//crear todas las rutas que tienen que ver con los productos
router.route('/recetas')
.get(listarRecetas)
.post(crearReceta);

/*
router.route('/recetas/:id')
.get(obtenerProducto)
.put(editarProducto) //TODO: agregar validaciones aqui tambien
.delete(borrarProducto);
*/

export default router;