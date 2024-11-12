import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtiene los pedidos
export const getPedido = async (req, res) => {
  console.log(req.params.id);
  const [result] = await pool.query(`SELECT u.nombre,l.titulo,p.cantidad,p.observacion , p.estado
    from prestamo p,libro l, usuarios u
    where u.id = p.id
    AND u.clave ='${req.query.q}'`);  
  res.json(result)
};