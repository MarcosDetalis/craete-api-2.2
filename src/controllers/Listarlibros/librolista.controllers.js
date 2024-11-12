import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtiene los pedidos
export const getlistarlibro = async (req, res) => {
   console.log(req.params.id);
  const [result] = await pool.query
  (`SELECT * from libros`);  
  // cambiar a prestamo y añadir los where 
  res.json(result) 
};