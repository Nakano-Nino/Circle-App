import { Request, Response } from "express";
import LikesServices from "../service/LikesServices";

export default new class LikesController {
    findAll(req: Request, res: Response) {
        LikesServices.findAll(req, res)
    }
    create(req: Request, res: Response) {
        LikesServices.create(req, res)
    }
    delete(req: Request, res: Response) {
        LikesServices.delete(req, res)
    }
}();