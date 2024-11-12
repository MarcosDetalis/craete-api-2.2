import { Router } from "express";

import {getlisAutor} from  "../controllers/listar_autor/listautor.controllers.js"

const router = Router();

router.get("/lisauto", getlisAutor); // cargar la vista no tocar


export default router;