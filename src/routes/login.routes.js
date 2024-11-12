import { Router } from "express";
import { getLogin, gettoket } from "../controllers/Login/login.controller.js";

const router = Router();

 

router.post("/auten", getLogin);
 
router.post("/toket", gettoket);

export default router;
