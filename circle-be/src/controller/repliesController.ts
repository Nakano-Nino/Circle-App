import { Request, Response } from "express";
import RepliesServices from "../service/RepliesServices";

export default new class RepliesController {
    findAll(req: Request, res: Response) {
        RepliesServices.findAll(req, res)
    }
    countAll(req: Request, res: Response) {
        RepliesServices.countAll(req, res)
    }
    getOne(req: Request, res: Response) {
        RepliesServices.getOne(req, res)
    }
    create(req: Request, res: Response) {
        RepliesServices.create(req, res)
    }
    // update(req: Request, res: Response) {
    //     RepliesServices.update(req, res)
    // }
    // delete(req: Request, res: Response) {
    //     threadServices.delete(req, res)
    // }
}();