import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtenemos todos los autores
export const getAutor = async (req, res) => {
  console.log(req.params.id);
  console.log("usa get");
  const [result] = await pool.query("SELECT * from autor");
  res.json(result);
};

//Se guarda nuevos autores 
export const agregarAutor = async (req, res) => {
  try {
    const {
        pais_idPais,
        aut_nombre,
    } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    console.log("router user agregar");
    const [rows] = await pool.query(
      "INSERT INTO autor (pais_idPais,aut_nombre) VALUES (?,?)", //creamos el script para cargar los datos
      [
        pais_idPais,
        aut_nombre,
      ]
    );
    res.status(201).json("Datos guadados"); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Error al tratar de guardar" });
  }
};

// Se elimina autor eliminar
export const eliminarAtour = async (req, res) => {
  try {
    const {id} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
     console.log(id)
    const [rows] = await pool.query(
      "DELETE FROM autor WHERE idAutor=?", //creamos el script para cargar los datos
      [id]
    
    );
    res.status(201).json({ message: "Autor Eliminado con exito" }); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Error al trata de eliminar" });
  }
};

// actualizar datos del usuario

export const actualizarAutor = async (req, res) => {
  try {
    console.log(req.body);
    const {id,pais_idPais,
        aut_nombre} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
  
    const [result] = await pool.query(
    `UPDATE autor 
    SET 
    pais_idPais = "${pais_idPais}",
    aut_nombre ="${aut_nombre}" WHERE idAutor=${id};`);
    console.log(result);
    res.status(201).json({message: "Datos actaulizados con exito"}); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "error al tratar de actualizar" });
  }
};