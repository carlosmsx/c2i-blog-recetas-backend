import {Router} from 'express';
import { loginUsuario } from '../controllers/usuarios.controller';

const authRouter = Router();

authRouter.route('/auth')
.post(loginUsuario); //TODO: agregar validaciones


/*
authRouter.route('/auth/:id')
.put(editarUsuario) //TODO: agregar validaciones aqui tambien
.delete(borrarUsuario)
.get(obtenerUsuario);
*/

export default authRouter;