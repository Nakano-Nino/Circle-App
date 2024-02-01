import { Request, Response } from "express";
import userServices from "../service/userServices";

export default new (class UserControllers {
    register(req: Request, res: Response) {
        userServices.register(req, res)
    }
    login(req: Request, res: Response) {
        userServices.login(req, res)
    }
    check(req: Request, res: Response) {
        userServices.check(req, res)
    }
    getOne(req: Request, res: Response) {
        userServices.getOne(req, res)
    }
    findAll(req: Request, res: Response) {
        userServices.findAll(req, res)
    }
})();