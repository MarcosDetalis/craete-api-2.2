import { Router } from "express";
// importacion de los controladores
import { getlisPedido} from '..//controllers/lispedido/Listados.controllers.js';

const router = Router();

router.get("/p", getlisPedido); // cargar la vista no tocar

//router.delete("/consulta/:q", ConsulReserva);
//router.get("/reservas/:id", getReservas);
export default router;