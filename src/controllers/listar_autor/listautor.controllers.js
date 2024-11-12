import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtiene los pedidos
export const getlisAutor = async (req, res) => {
  
   const [result] = await pool.query
   (`SELECT * from autor` )
   //(`SELECT * from prestamo p, usarios u where u.id = '${req.query.q}' ` )
   
  res.json(result) 
  console.log(result);
};