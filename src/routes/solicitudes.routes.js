import { Router } from "express";
// importacion de los controladores
import {updateReservas,anularReservas,pendienteReservas,ElimiReserva,getSolicitudes,ConsulReserva} from '../controllers/Solicitud/solicitudes.controller.js'

const router=Router();

router.get("/solicitudes", getSolicitudes)

//update
router.put("/update", updateReservas);
// anular reservas
router.put("/anular", anularReservas);

router.put("/pendiente", pendienteReservas);

router.delete("/eliminar", ElimiReserva);

router.delete("/consulta/:q", ConsulReserva);

export default router;