import { Router } from "express";
// importacion de los controladores
import { getPedido} from '../controllers/Pedidos/Pedido.controllers.js';

const router = Router();

router.get("/pedido", getPedido); // cargar la vista
//router.get("/p", getlisPedido)

export default router;