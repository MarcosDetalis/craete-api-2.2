import { pool } from "../../db.js";



export const getSolicitudes = async (req, res) => {
    const [result] = await pool.query("SELECT * from reservas");
    res.json(result);
  };





  export const ConsulReserva = async (req, res) => {
  const {q}=req.body;
    const [result] = await pool.query("SELECT * from reservas where res_nombre=?",[q]);
    res.json(q);
  };


// controlador eliminar
  export const ElimiReserva = async (req, res) => {
    try {
      const {id} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
     
      const [rows] = await pool.query(
        "DELETE FROM Reservas WHERE idreservas=?", //creamos el script para cargar los datos
        [id]
      );
      res.status(201).json({id}); //Enviamos el estado al cliente
    } catch (error) {
      return res.status(500).json({ message: "Dato Eliminado" });
    }
  };
  
  // controlador actualizar
  export const updateReservas = async (req, res) => {
    try {
      console.log(req.body);
      const {id,estado,estadoo} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    
      const [result] = await pool.query(
      `UPDATE reservas SET  res_estado=2,res_estadoo='Activo' WHERE idreservas=${id};`);
      console.log(result);
      res.status(201).json({id,estado,estadoo}); //Enviamos el estado al cliente
    } catch (error) {
      return res.status(500).json({ message: "error al tratar de actualizar" });
    }
  };
  
  // controlador anular
  export const anularReservas = async (req, res) => {
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
  };
  // controlador pendientes
  export const pendienteReservas = async (req, res) => {
    try {
      console.log(req.body);
      const {id,estado,estadoo} = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    
      const [result] = await pool.query(
      `UPDATE reservas SET  res_estado=1,res_estadoo="Pendiente" WHERE idreservas=${id};`);
      console.log(result);
      res.status(201).json({id,estado,estadoo}); //Enviamos el estado al cliente
    } catch (error) {
      return res.status(500).json({ message: "error al tratar de actualizar" });
    }
  };
  