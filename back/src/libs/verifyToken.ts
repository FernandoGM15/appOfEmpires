import { NextFunction, Request, Response } from 'express';
import jwt from "jsonwebtoken";

interface IPayload {
    _id:string,
    iat:number,
    exp:number
}


export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("token");

    if (!token) return res.status(401).json("Access denied");

    const payload = jwt.verify(token, process.env.JWT_SECRET || "admin123") as IPayload;
    req.userId = payload._id;
    next();
}