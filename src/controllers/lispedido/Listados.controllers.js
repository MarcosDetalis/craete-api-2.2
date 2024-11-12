import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtiene los pedidos
export const getlisPedido = async (req, res) => {
console.log(req.query.q);
const {usunombre} = req.body;

   const [result] = await pool.query
   (`SELECT p.fecha_prestamo from prestamo p, usuarios u
      where u.id = p.id
        and u.clave = '${req.query.q}' ` )
   //(`SELECT * from prestamo p, usarios u where u.id = '${req.query.q}' ` )
   
  res.json(result) 
  console.log(result);
};



// servicio de ejemplo 
/*export const anularReservas = async (req, res) => {
  try {
    console.log(req.body);
    const {id,estado,estadoo} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian  
    const [result] = await pool.query(
    `UPDATE reservas SET  res_estado=3,res_estadoo="Anulado" WHERE idreservas=${id};`);
    console.log(result);
    res.status(201).json({id,estado,estadoo}); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "error al tratar de actualizar" });
  }
};*/
// http://localhost:4005/lispedido/p/?q=1