import { Router } from "express";
// importacion de los controladores
import { getRellenos} from '../controllers/Rellenaitems/Rellenos.controller.js';

const router = Router();

router.get("/rellenositems", getRellenos); // cargar la vista

export default router;