import { pool } from "../../db.js"; //conexion  a la base de datos


//Obtiene los rellenos de la tabla libro y categorias con la imagenes
export const getRellenos = async (req, res) => {


   const [result] = await pool.query
   (`SELECT a.aut_nombre,l.lib_nombre,l.imagen, c.cate_descripcion
      FROM autor a INNER JOIN libros l, categorias c
     where c.idCategorias = l.Categorias_idCategorias
       and l.Categorias_idCategorias = '${req.query.q}' ` )

  res.json(result) 
  console.log(result);
};