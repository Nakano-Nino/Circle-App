import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

class AuthMiddleware {
    Authentication(req: Request, res:Response, next: NextFunction){
        try {
            const authHeader = req.header('authorization')
            const secretKey = process.env.JWT_SECRET

            if(!authHeader || !authHeader.startsWith("Bearer")){
                return res.status(401).json({ message: "Unauthorized" })
            }

            const token = authHeader.split(" ")[1]

            try {
                const loginSession = jwt.verify(token, secretKey)
                
                res.locals.loginSession = loginSession
                next()
            } catch (error) {
                return res.status(401).json({ message: "Unauthorized" })
            }
        } catch (error) {
            next(error)
        }
    }
}

export default new AuthMiddleware().Authentication