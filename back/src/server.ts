import express, { Application } from "express";
import connection from "./database";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import CivilizationRoutes from "./Routes/CivilizationRoutes";
import UserRoutes from "./Routes/UserRoutes";

class Server {
    app: Application = express();

    constructor() {
        connection();
        this.config();
        this.routes();
        this.run();
    }

    routes(): void {
        this.app.use("/api/civilizations", CivilizationRoutes.router);
        this.app.use("/api/users",UserRoutes.router)
    }

    config(): void {
        dotenv.config();
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use('/uploads', express.static(path.resolve('uploads')));

    }
    run(): void {
        this.app.listen(process.env.SERVER_PORT, () => {
            console.log(`server started at http://localhost:${process.env.SERVER_PORT}`);
        })
    }

}

export default new Server();