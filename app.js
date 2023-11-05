const fs = require("fs");
const mysql = require("mysql");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log("Bienvenido a la migración de su base de datos:");
  console.log("1. Módulo Master");
  console.log("2. Módulo Negocio");
  console.log("3. Módulo Administrativo");
  console.log("4. Módulo Autogenerables");
  console.log("5. Salir");
  rl.question("Seleccione una opción: ", (opcion) => {
    if (opcion === "1") {
      console.log("Seleccionaste la Opción 1");
    } else if (opcion === "2") {
      console.log("Seleccionaste la Opción 2");
    } else if (opcion === "3") {
      console.log("Seleccionaste la Opción 3");
    } else if (opcion === "4") {
      console.log("Seleccionaste la Opción 4");
    } else if (opcion === "5") {
      console.log("Saliendo del programa");
      rl.close();
    } else {
      console.log("Opción no válida. Por favor, elige una opción válida.");
      mostrarMenu();
    }
  });
}

mostrarMenu();

// const connectionSucursal = mysql.createConnection({
//   host: "edicat.com.co",
//   user: "edicat_Administrador",
//   password: "Administrador01*",
//   database: "edicat_jsucursal",
// });

// const connectionPlataforma = mysql.createConnection({
//   host: "edicat.com.co",
//   user: "edicat_Administrador",
//   password: "Administrador01*",
//   database: "edicat_Plataforma",
// });

// rl.question("Ingresa el ID de la consulta: ", (id) => {
//   conexionSucursal(id);

//   rl.close();
// });

// const conexionSucursal = (id) => {
//   connectionSucursal.connect((err) => {
//     if (err) {
//       console.error("Error de conexión a la base de datos: " + err.message);
//       return;
//     }
//     console.log("Conexión a la base de datos MySQL establecida.");
//   });

//   const query = `SELECT * FROM edicat_jsucursal.Usuarios limit ${id}`;

//   connectionSucursal.query(`${query}`, (err, results) => {
//     if (err) {
//       console.error("Error en la consulta: " + err.message);
//       return;
//     }

//     results.forEach((element) => {
//       const {
//         Codigo,
//         Usuario,
//         Pass,
//         Salt,
//         Nombre,
//         TipoDocumento,
//         Documento,
//         Perfil,
//         Administrador,
//         Estado,
//         CambioPass,
//         Habilitado,
//         UsuarioCreacion,
//         FechaCreacion,
//         UsuarioModificacion,
//         FechaModificacion,
//       } = element;

//       const FechaCreacionString =
//         FechaCreacion !== null
//           ? FechaCreacion.toISOString().slice(0, 19).replace("T", " ")
//           : null;

//       const FechaModificacionString =
//         FechaModificacion !== null
//           ? FechaModificacion.toISOString().slice(0, 19).replace("T", " ")
//           : null;

//       // console.log("FechaCreacion", FechaCreacion, FechaCreacionString);
//       // console.log(
//       //   "FechaModificacion",
//       //   FechaModificacion,
//       //   FechaModificacionString
//       // );
//       // console.log(" ");

//       const query = `INSERT INTO edicat_Plataforma.Usuarios (Usuario, Pass, Salt, Nombre, TipoDocumento, Documento, Perfil, Administrador, Estado, CambioPass, Habilitado, UsuarioCreacion, FechaCreacion, UsuarioModificacion, FechaModificacion) VALUES ('${Usuario}', '${Pass}', '${Salt}', '${Nombre}', '${TipoDocumento}', '${Documento}', '${Perfil}', '${Administrador}', '${Estado}', '${CambioPass}', '${Habilitado}', '${UsuarioCreacion}', '${FechaCreacionString}', '${UsuarioModificacion}', '${FechaModificacionString}');`;

//       console.log(query);

//       // create a file stream and pass it the query and overwrite the file if it exists
//       const file = fs.createWriteStream("query.sql", { flags: "a" });
//       file.write(`${query}\n\n\n`);
//       file.end();
//     });

//     //console.log("Resultados de la consulta:", results);
//   });

//   connectionSucursal.end((err) => {
//     if (err) {
//       console.error("Error al cerrar la conexión: " + err.message);
//     }
//     console.log("Conexión a la base de datos MySQL cerrada.");
//   });
// };
