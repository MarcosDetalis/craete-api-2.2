import { pool } from "../db.js"; //conexion  a la base de datos
export const getlisreservas = async (req, res) => {
  
    const [result] = await pool.query("SELECT * from reservas");
    res.json(result);
  };