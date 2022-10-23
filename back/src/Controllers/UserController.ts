import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../Schemas/UserModel";
import { ObjectId } from "mongoose";

class UserController {

    // @desc Get all the users stored in the collection
    // @route GET /api/users/
    // @access Private
    async index(req: Request, res: Response) {
        try {

            const users = await UserModel.findById(req.userId, {password:0});
            return res.json(users);
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    // @desc Store a user in the collection
    // @route POST /api/users/
    // @access Public
    async store(req: Request, res: Response): Promise<Response> {
        try {
            const user = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            user.password = await user.encryptPassword(user.password);
            const savedUser = await user.save();
            return res.json(savedUser);
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    // @desc Authenticate User
    // @route POST /api/users/login
    // @access Public
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const user = await UserModel.findOne({ email: req.body.email });

            if (!user) {
                return res.status(400).json("The user doesn't exist");
            }
            const validate = await user.validatePassword(req.body.password);
            if (!validate) {
                return res.status(400).json("Invalid password");
            }

            const token:string = jwt.sign(
                {
                    _id: user._id
                },
                process.env.JWT_SECRET || "admin123",
                {
                    expiresIn:"1d"
                })
            return res.header("token",token).json(user);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    // @desc Generate JWT
    generateToken(id: ObjectId): string {
        const secret: string = process.env.JWT_SECRET || "admin123";
        return jwt.sign({ id },
            secret, {
            expiresIn: "30d"
        })
    }
}

export default new UserController;