import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtiene los carreras
export const getBusquedad = async (req, res) => {

    const user_id = req.query.id;
    
     console.log( user_id)

     const [result] = await pool.query(`SELECT * FROM libros l where l.lib_nombre LIKE '%${user_id }%'
                                        || 
                                        l.id_autor = 
                                        (SELECT a.idAutor from autor a where a.aut_nombre LIKE '%${user_id}%')`);
     res.json(result);

     console.log(result);
  //const [result] = await pool.query("SELECT * from pais");
 // res.json(result);

 //SELECT * FROM libros l where l.lib_nombre LIKE '%x%' || l.id_autor = (SELECT a.`idAutor` from autor a where a.aut_nombre LIKE '%isaac%') LIMIT 0,100
};

 