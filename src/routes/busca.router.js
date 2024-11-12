import { Router } from "express";
// importacion de los controladores
import {
    getBusquedad
} from "../controllers/Buscar_libro_autor/Busquedad.js";

const router = Router();

router.get("/list", getBusquedad); // cargar la vista
 
export default router;
