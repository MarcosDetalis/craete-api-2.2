import { pool } from "../db.js";

export const index = (req, res) =>
  res.json({ message: "Api de prueba para la biblioteca" });

export const ping = async (req, res) => {
  const [result] = await pool.query(
    "SELECT (SELECT Count(*) FROM pais ) as l ,(SELECT Count(*) from carreras) as l3");
  res.json(result);
};
