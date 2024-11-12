import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtiene los carreras
export const getPais = async (req, res) => {
  console.log(req.params.id);
  const [result] = await pool.query("SELECT * from pais");
  res.json(result);
};

//Aguega nuevos carreras
export const agregarPais = async (req, res) => {
  try {
    const {pais} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    console.log("router user agregar",pais);
    const [rows] = await pool.query(
      "INSERT INTO pais (nombre) VALUES (?)", //creamos el script para cargar los datos
      [pais]
    );
    res.status(201).json("Datos guadados"); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Error al tratar de guardar" });
  }
};

// Se elimina usuarios eliminar
export const eliminarPais = async (req, res) => {
  
  try {
    const {id} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
     console.log(id)
    const [rows] = await pool.query(
      "DELETE FROM pais WHERE idPais=?", //creamos el script para cargar los datos
      [id]
    );
    res.status(201).json({ message: "Carrera Eliminado con exito" }); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Error al trata de eliminar" });
  }
};

// actualizar datos del usuario

export const actualizarPais = async (req, res) => {
  try {
    const { id, nombre } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
     console.log("router user agregar", id, nombre);
    const [result] = await pool.query(
      `UPDATE pais SET  nombre="${nombre}" WHERE idPais=${id};`
    );
  console.log(result);
    res.status(201).json({ message: "Guardado con exito" }); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "error al tratar de actualizar" });
  }
  
};