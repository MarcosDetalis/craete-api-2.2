import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtiene los pedidos
export const getlisCategoria = async (req, res) => {
  
   const [result] = await pool.query
   (`SELECT * from categorias` )
   //(`SELECT * from prestamo p, usarios u where u.id = '${req.query.q}' ` )
   
  res.json(result) 
  console.log(result);
};