import { Router } from "express";
// importacion de los controladores
//import { getlisPedido} from '..//controllers/lispedido/Listados.controllers.js';
import { getlisCategoria } from "../controllers/lista_categoria/listarcate.controllers.js";

const router = Router();

router.get("/catelista", getlisCategoria); // cargar la vista no tocar


export default router;

//http://localhost:4005/liscategoria/catelista