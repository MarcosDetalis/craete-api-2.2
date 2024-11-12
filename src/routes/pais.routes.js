import { Router } from "express";
// importacion de los controladores
import {
  getPais,
  agregarPais,
  actualizarPais,
  eliminarPais,
} from "../controllers/Agregar_pais/Pais.controllers.js";

const router = Router();

router.get("/paises", getPais); // cargar la vista
router.post("/agregarpais", agregarPais); // carga un nuevo usuario
router.delete("/eliminarpais", eliminarPais);
router.put("/actualizarpais", actualizarPais); // eliminamos un usuario

export default router;
