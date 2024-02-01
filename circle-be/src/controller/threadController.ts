import { Request, Response } from "express";
import threadServices from "../service/threadServices";
import ThreadQueue from "../queue/thread_queue";

export default new class ThreadController {
    findAll(req: Request, res: Response) {
        threadServices.findAll(req, res)
    }
    getOne(req: Request, res: Response) {
        threadServices.getOne(req, res)
    }
    create(req: Request, res: Response) {
        ThreadQueue.create(req, res)
    }
    update(req: Request, res: Response) {
        threadServices.update(req, res)
    }
    delete(req: Request, res: Response) {
        threadServices.delete(req, res)
    }
}();