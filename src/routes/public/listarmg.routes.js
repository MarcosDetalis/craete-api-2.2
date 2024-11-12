import { Router } from "express";
// importacion de los controladores


const router = Router();

router.get("/listarmg", getlismg); // cargar la vista


export default router;