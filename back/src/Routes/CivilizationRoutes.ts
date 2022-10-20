import { Router } from "express";
import CivilizationController from "../Controllers/CivilizationController";
import multer from "../libs/multer";

class CivilizationRoute {

    router:Router = Router();

    constructor() {
        this.router.route("/").get(CivilizationController.index);
        this.router.route("/").post(multer.single("image"),CivilizationController.store);
        this.router.route("/:id").get(CivilizationController.show);
        this.router.route("/:id").put(CivilizationController.update);
        this.router.route("/:id").delete(CivilizationController.delete);
    }
}

export default new CivilizationRoute();