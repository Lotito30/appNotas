const usuarioController ={
    iniciarSesion:(req,res) =>{
        let title = "Iniciar Sesion";
        res.render('usuario/inicioSesion',{title:title})
    },
    recuperarContrasena:(req,res) =>{
        let title = "Recuperar Contraseña";
        res.render('usuario/recuperarContrasena',{title:title})
    },
    registrarUsuario:(req,res) =>{
        let title = "Registrarse";
        res.render('usuario/registrarUsuario',{title:title})
    }
}
module.exports = usuarioController