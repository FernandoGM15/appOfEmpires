import { Request, Response } from "express";
import path from "path";
import fs from "fs/promises";
import CivilizationModel from "../Schemas/CivilizationModel";

class CivilizationController {

    //INDEX
    async index(req: Request, res: Response): Promise<Response> {
        try {
            const civilizations = await CivilizationModel.find();
            return res.json(civilizations);
        } catch (error) {
            return res.status(400).json(error)
        }

    }

    //STORE
    async store(req: Request, res: Response): Promise<Response> {
        try {
            const { name, expansion, army_type, team_bonus } = req.body;
            const newCivilization = {
                name,
                expansion,
                army_type,
                team_bonus,
                image: req.file?.path
            }
            const civilization = await CivilizationModel.create(newCivilization);
            return res.json(civilization);
        } catch (error) {
            return res.status(400).json(error)
        }

    }

    //SHOW
    async show(req: Request, res: Response): Promise<Response> {
        try {
            const civilization = await CivilizationModel.findById(req.params.id);
            return res.json(civilization);
        } catch (error) {
            return res.status(400).json(error)
        }

    }

    //UPDATE
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { name, expansion, army_type, team_bonus } = req.body;
            const civilization = await CivilizationModel.findByIdAndUpdate(id, {
                name,
                expansion,
                army_type,
                team_bonus,
            }, {
                new: true
            });
            return res.json(civilization);
        } catch (error) {
            return res.status(400).json(error)
        }

    }

    //DELETE
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const civilization = await CivilizationModel.findByIdAndRemove(req.params.id);
            if (civilization) {
                await fs.unlink(path.resolve(civilization.image));
            }
            return res.json(civilization);
        } catch (error) {
            return res.status(400).json(error)
        }

    }

}

export default new CivilizationController();    