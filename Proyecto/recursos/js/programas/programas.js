$(document).ready(function () { //INICIA LA FUNCION GET PARAM
    getParam();
});

let UserObject = [];
//let table_Programas = new DataTable('#ID_tb_Programas'); -NO IMPORTA

let table_Programas = $('#ID_tb_Programas').DataTable({ //Inicia mi tabla de programas con el llamado de mi ID
    "language": {
        "search": "Buscar :",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo"
        }
    }
});;

/*******************************************************************************/

function getParam() {
    let url_path = location.href; //OBTENGO LA URL EN LA VARIABLE
    let array_Params = url_path.split("?") //SERPARO LA VARIBLE EN "?" - OBJETO //OBTENGO UN ARREGLO
    let aux_Params = array_Params[1]; //OBTENGO EL SEGUNDO ARREGLO
    let tokenValidate;

    if (aux_Params != undefined && aux_Params.includes("U")) { //VALIDA EH AGREGA Al U - OBJETO
        let User_Aux = aux_Params.split("=")[1];

        if (User_Aux.length > 0 && User_Aux != undefined) { //SE VALIDA UNA VES MAS QUE EL PARAMETRO SEA CORRECTO

            UserObject = lista_Usuario.find(u => u.usuario == User_Aux); //FIND TE DEVUELVE UN OBJETO DE TODO EL ARREGLO
            try {
                if (UserObject.usuario.length > 0 && UserObject != undefined) { // TRY SIRVE PARA VER SI NO EXISTE, SERA NULO
                    tokenValidate = true;

                    $("#id_user").text(UserObject.nombres);

                } else {
                    tokenValidate = false;
                }

            } catch (error) {
                tokenValidate = false;
            }

        } else {
            tokenValidate = false;
        }
    } else {
        tokenValidate = false;
    }

    if (tokenValidate) {       //sI ES TU INICIA LA BANDEJA
        iniciarBandeja()
    } else {                   //SINO REDERIGE AL INDEX
        window.location = "/index.html"
    }
}

/*******************************************************************************/

function iniciarBandeja() {

    //INICIAMOS LA TABLA DE PROGRAMAS - table_Programas
    for (let i = 0; i < lista_Reservas.length; i++) {           //SE HACE LLAMADO A MI ARREGLO DE RESERVAS - lista_Reservas 
        table_Programas.row.add([                               //SE AGREGAR LAS RESERVAS DEL ARREGLO YA CREADO
            "<span>" + lista_Reservas[i].cod_Programa + "</span",
            "<span>" + lista_Reservas[i].tip_Habitacion + "</span",
            "<span>" + lista_Reservas[i].nombr_Usuario + "</span",
            "<span>" + lista_Reservas[i].dni + "</span",                    //Lista de Reservas Por ID
            "<span>" + lista_Reservas[i].fech_Entrada + "</span",
            "<span>" + lista_Reservas[i].fech_Salida + "</span",
            "<span>" + lista_Reservas[i].correo_Usuario + "</span",
            /*"<span><span class='btn btn-sm btn-success'>ver programa</span></span"*/
        ]).draw(true);

    }

    console.log("Bandeja de programas esta lista para usar")

}