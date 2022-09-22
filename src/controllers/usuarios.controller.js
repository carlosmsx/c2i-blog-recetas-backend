//TODO crear el modelo de usuario

export const loginUsuario = (req,res) => {
    try {
        const usuario = req.body;
        console.log(usuario);
    
        if (usuario.email==='administrador') {
            console.log("admin");
            res.status(201).json({email: usuario.email, perfil: 'admin'});
        }
        else if (usuario.email==='usuario') {
            console.log("usuario valido");
            res.status(201).json({email: usuario.email, perfil: 'usuario'});
        }
        else {
            console.log("usuario no valido");
            res.status(404).json({mensaje: "usuario no valido"});
        }       
    } catch (error) {
        res.status(404).json({mensaje: "usuario no valido"});
    }
}