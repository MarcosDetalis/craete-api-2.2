import { Router } from "express";
import { getlistarlibro } from "../controllers/Listarlibros/librolista.controllers.js";

const router = Router();

router.get("/listarlibro", getlistarlibro); // cargar la vista no tocar


export default router;