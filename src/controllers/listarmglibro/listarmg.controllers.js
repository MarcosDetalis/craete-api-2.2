import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtiene los pedidos
export const getlistarimage = async (req, res) => {
   console.log(req.params.id);
  const [result] = await pool.query
  (`SELECT * from libros`);  
  
  res.json(result) 
};