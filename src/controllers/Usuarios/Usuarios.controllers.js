import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtenemos todos los usuarios
export const getUsuarios = async (req, res) => {
  console.log(req.params.id);
  console.log("usa get");
  const [result] = await pool.query("SELECT * from usuarios");
  res.json(result);
};

//Se guarda a nuevos usuarios 
export const agregarusu = async (req, res) => {
  try {
    const {
      usu_nombre,
      usu_apellido,
      usu_correo,
      usu_carrera,
      usu_telefono,
      contrasena,
    } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    console.log("router user agregar");
    const [rows] = await pool.query(
      "INSERT INTO usuarios (usu_nombre,usu_apellido,usu_correo,usu_carrera,usu_telefono,contrasena) VALUES (?,?,?,?,?,?)", //creamos el script para cargar los datos
      [
        usu_nombre,
        usu_apellido,
        usu_correo,
        usu_carrera,
        usu_telefono,
        contrasena,
      ]
    );
    res.status(201).json("Datos guadados"); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Error al tratar de guardar" });
  }
};

// Se elimina usuarios eliminar
export const eliminarusu = async (req, res) => {
  try {
    const {id} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
     console.log(id)
    const [rows] = await pool.query(
      "DELETE FROM usuarios WHERE Id_usuarios=?", //creamos el script para cargar los datos
      [id]
    
    );
    res.status(201).json({ message: "Usuario Eliminado con exito" }); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Error al trata de eliminar" });
  }
};

// actualizar datos del usuario

export const actualizarusu = async (req, res) => {
  try {
    console.log(req.body);
    const {id,usu_nombre,
      usu_apellido,
      usu_telefono,
      contrasena} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
  
    const [result] = await pool.query(
    `UPDATE usuarios 
    SET 
    usu_nombre = "${usu_nombre}",
    usu_apellido ="${usu_apellido}",
    usu_telefono =${usu_telefono},
    contrasena = "${contrasena}" WHERE id_usuarios=${id};`);
    console.log(result);
    res.status(201).json({message: "Datos actaulizados con exito"}); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "error al tratar de actualizar" });
  }
};