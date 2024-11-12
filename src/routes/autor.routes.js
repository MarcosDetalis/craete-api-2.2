import { Router } from "express";
// importacion de los controladores
import {
  getAutor,
  agregarAutor,
  eliminarAtour,
  actualizarAutor,
} from "../controllers/Agregar_autor/Autor.controllers.js";// ruta autor

const router = Router();

router.get("/Autor", getAutor); // cargar la vista
router.post("/agregarusu", agregarAutor); // carga un nuevo usuario
router.delete("/eliminarAtour",eliminarAtour); // eliminamos un usuario
router.put("/actualizarAutor", actualizarAutor); 

export default router;
