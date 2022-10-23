import { Router } from "express";
import UserController from "../Controllers/UserController";
import { TokenValidation } from "../libs/verifyToken";

class UserRoutes {

    router:Router = Router();
    constructor() {
        this.router.post("/",UserController.store);
        this.router.post("/login",UserController.login);

        this.router.get("/",TokenValidation, UserController.index);
    }
}

export default new UserRoutes;