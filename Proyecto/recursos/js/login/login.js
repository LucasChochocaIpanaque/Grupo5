
//"CLASE"     "ELEMENTO"    "FUNCION"
$(".finit").on('click', function () {
    //debugger
    //AQUI VALIDA EL FORMULARIO Y NOS DA UN VERDADERO
    if (validarFormulario()) {
        let aux_Usuario = $("#ID_Usuario").val().trim(); //SI ES "VERDAD"
        let aux_Contraseña = $("#ID_Contraseña").val(); //AQUI OBTENGO LOS DATOS DE MI FORMULARIO
        let respuestaUsuario = validarUsuario(aux_Usuario, aux_Contraseña);  //SI TODO ESTA CORRECTO VALIDA EL FORMULARIO
        if (respuestaUsuario.existe && respuestaUsuario.contraseña) {

            console.log(respuestaUsuario);

            $("#ID_MsjError").hide();
            iniciarAPP(respuestaUsuario);
        } else {
            console.log(respuestaUsuario);
            $("#ID_MsjError").show();//lanzar mensajes //Usuario, contraseña incorrecta
        }
    } else {
        $("#ID_MsjError").show();
    }

});

/*******************************************************************************/

function validarFormulario() {
    let tokenVal; //INICIO LA VARIABLE
    let aux_Usuario = $("#ID_Usuario").val().trim(); //SI ES "VERDAD"
    let aux_Contraseña = $("#ID_Contraseña").val(); //AQUI OBTENGO LOS DATOS DE MI FORMULARIO

    if (aux_Usuario.length > 0 && aux_Usuario != undefined &&
        aux_Contraseña.length > 0 && aux_Contraseña != undefined) { // SE VALIDAD LOS DATOS INGRESADOS
        tokenVal = true;
    } else {
        tokenVal = false; //RETORNA FALSO SI NO ES CORRECTO
    }
    return tokenVal; //todo esta correcto
}

/*******************************************************************************/

function iniciarAPP(usuarioLogged) {
    let userAux = usuarioLogged.usuario.usuario
    window.location = "./modulos/programas/bandeja.html?U=" + userAux;
}

/*******************************************************************************/

//LOGICA VALIDA
function validarUsuario(usuario, contraseña) {

    let objetoValidado;

    const usuario_final = getUser();

    //VA IR BASE DE DATOS Y TRATAR DE HACER MATCH
    let usuarioRecuperado = lista_Usuario.find(x => x.usuario == usuario);

    try {
        //IDENTIFICA QUE EL USUARIO SI EXISTE
        if (usuarioRecuperado.usuario.length > 0 && usuarioRecuperado != undefined && usuarioRecuperado != null) {

            if (usuarioRecuperado.contraseña === contraseña) { //VALIDA LA CONTRASEÑA

                let userRol = lista_Roles.find(r => r.id == usuarioRecuperado.id_rol);

                objetoValidado = {
                    existe: true,
                    contraseña: true,
                    usuario: {
                        nombres: usuarioRecuperado.nombres,
                        correo: usuarioRecuperado.correo,
                        dni: usuarioRecuperado.dni,
                        telefono: usuarioRecuperado.telefono,
                        usuario: usuarioRecuperado.usuario,
                        rol: {
                            nombre: userRol.nombre,
                            cod: userRol.cod
                        }
                    }
                }

            } else {
                objetoValidado = {
                    existe: true,
                    contraseña: false,
                    usuario: null
                }
            }

        } else {

            objetoValidado = {

                existe: false,
                contraseña: false,
                usuario: null
            }
        }

    } catch (error) {
        console.log(error);
        objetoValidado = {
            existe: false,
            contraseña: false,
            usuario: null
        }
    }

    return objetoValidado;

}

/*******************************************************************************/

function getUser() {
    let response;
    let data_response;
    try {

        //OPERACION CON BASE DE DATOS
        var params = {
            "url": "http://localhost:8000/api/servicios",
            "method": "GET",
            async: false,
            "timeout": 0,
          };
          
          $.ajax(params).done(function (r) {
            data_response = r;
            console.log(r);
          });

        return response = {
            estado: true,
            mensajeError: "ok",
            data: data_response
        }
    } catch (error) {
        return response = {
            estado: false,
            mensajeError: error,
            data: {}

        }
    }
}


