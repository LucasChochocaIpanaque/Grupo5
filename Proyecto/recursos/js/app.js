
var lista_Usuario = [
    {
        nombres: "Soy el Admin",
        correo: "Admin@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "admin",
        contraseña: "admin123456",
        id_rol: 1
    },
    {
        nombres: "Soy el Docente",
        correo: "Docente@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "docente",
        contraseña: "docente123456",
        id_rol: 2
    },
    {
        nombres: "Soy el Alumno",
        correo: "Alumno@gmail.com",
        dni: "12345678",
        telefono: "123456789",
        usuario: "alumno",
        contraseña: "alumno123456",
        id_rol: 3
    },
    {
        nombres: "Bienvenido LUCAS",
        correo: "LucasChochoca@gmail.com",
        dni: "74691036",
        telefono: "934484645",
        usuario: "LucasAdmin",
        contraseña: "LucasChochoca190428",
        id_rol: 4
    }
]

/*******************************************************************************/

var lista_Roles = [
    {
        id: 1,
        nombre: "Administrador",
        cod: "ADM"
    },
    {
        id: 2,
        nombre: "Docente",
        cod: "DOC"
    },
    {
        id: 3,
        nombre: "Alumno",
        cod: "ALU"
    },
    {
        id: 4,
        nombre: "Lucas",
        cod: "LU"
    }
]

/*******************************************************************************/

var lista_Programas = [
    {
        cod_Programa: "P001",
        Nombre_Programa: "Especialización de Excel",
        Nro_Cursos: 3,
        Cursos: ["C001", "C002", "C003"],
        Fecha_Inicio: "01/10/2023",
        Fecha_Fin: "15/12/2023"
    },
    {
        cod_Programa: "P002",
        Nombre_Programa: "Especialización de Power BI",
        Nro_Cursos: 2,
        Cursos: ["C001", "C002"],
        Fecha_Inicio: "01/11/2023",
        Fecha_Fin: "20/12/2023"
    },
    {
        cod_Programa: "P003",
        Nombre_Programa: "Tecnicas de venta",
        Nro_Cursos: 1,
        Cursos: ["C003"],
        Fecha_Inicio: "01/11/2023",
        Fecha_Fin: "30/12/2023"
    }
]

/*******************************************************************************/
var lista_Reservas = [
    {
        cod_Programa: "L001",
        tip_Habitacion: "Habitacion Nivel Concierge",
        nombr_Usuario: "Lucas Chochoca",
        dni: "74691036",
        fech_Entrada: "17/11/2023",
        fech_Salida: "28/11/2023",
        correo_Usuario: "LucasChochoca@gmail.com"
    },

]
/*******************************************************************************/

let lista_Cursos = [
    {
        Cod_Curso: "C001",
        Nombre_Curso: "",
        Duracion: 8,
        Tiempo: "Horas",
        Temas: [
            {
                cod_Tema: "T001",
                nombre_Tema: ""
            },
            {
                cod_Tema: "T002",
                nombre_Tema: ""
            },
        ]

    },
    {
        Cod_Curso: "C002",
        Nombre_Curso: "",
        Duracion: 2,
        Tiempo: "Horas",
        Temas: [
            {
                cod_Tema: "T001",
                nombre_Tema: ""
            },
            {
                cod_Tema: "T002",
                nombre_Tema: ""
            },
        ]

    },
]

/*
function obtenerdata(req,res){
    let entityAux = req;
    entityAux.uri;
    https://certus.api/programas
    res = <Arreglo></Arreglo>;

    //AJAX <= SERVICIO TIPO REST (NODE JS)

    return res;
}*/