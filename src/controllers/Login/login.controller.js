import { pool } from "../../db.js";
import  jwt from "jsonwebtoken";

export const getLogin = async (req, res) => {
  const { correo, pass } = req.body;
  
  const [result] = await pool.query(
    `SELECT * from usuarios where  usu_correo= "${correo}" and contrasena ="${pass}"`
  );
  if (result.length > 0) {
    console.log(result);
       
      const token = jwt.sign(
        { id: correo },'opop',
        {
          expiresIn: '1h', // 24 hours
        }  
      );
   res.header("auth-token", token).json({
     error: null,
     data: { token },
     result: {result}
   });
      await pool.query(
        `UPDATE usuarios SET token="${token}" WHERE usu_correo= "${correo}";`
      );

   
     
  } else {
    res.status(500).json({ message: "Error al autenticarse" });
  }
};
export const gettoket = async (req, res) => {
 const { token } = req.body;
 const [result] = await pool.query(
   `SELECT token,usu_nombre from usuarios where  token= "${token}" `
 );
  if (result.length > 0) {
    res.status(200).json({ message: { result } });
     console.log("tiken", result);
  } else {
    res.status(500).json({ message: "Error al autenticarse" });
    console.log("tiken no");
  }

};


