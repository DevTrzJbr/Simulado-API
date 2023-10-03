import { Router } from "express";
import HomeController from "../controllers/Home";

const HomeRouter = Router();

HomeRouter.get("", HomeController.createPaciente);


export default HomeRouter