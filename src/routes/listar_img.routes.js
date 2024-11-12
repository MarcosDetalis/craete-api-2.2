import { Router } from "express";

import {getlistarimage} from  "../controllers/listarmglibro/listarmg.controllers.js"

const router = Router();

router.get("/listaimage", getlistarimage); // cargar la vista no tocar


export default router;