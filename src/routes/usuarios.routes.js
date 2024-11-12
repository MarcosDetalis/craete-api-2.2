import { Router } from "express";
// importacion de los controladores
import {
  getUsuarios,
  agregarusu,
  eliminarusu,
  actualizarusu,
} from "../controllers/Usuarios/Usuarios.controllers.js";

const router = Router();

router.get("/usuarios", getUsuarios); // cargar la vista
router.post("/agregarusu", agregarusu); // carga un nuevo usuario
router.delete("/eliminarusu",eliminarusu); // eliminamos un usuario
router.put("/actualizarusu", actualizarusu); 

export default router;
