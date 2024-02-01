import { Request, Response } from "express";
import sendMessageToQueue from "../libs/rabbitmq";
require('dotenv').config()

export default new class ThreadQueue {
    async create(req: Request, res: Response) {
        try {
            const payload = {
                content: req.body.content,
                image: res.locals.filename,
                users: res.locals.loginSession.obj.id,
                created_at: new Date(),
                updated_at: new Date()
            }

            const errorQueue = await sendMessageToQueue(process.env.THREAD_QUEUE, payload)
            if (errorQueue) return res.status(500).json({ message: errorQueue })

            return res.status(201).json({
                message: "Success creating a new thread!",
                payload
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const payload = {
                content: req.body.content,
                image: res.locals.filename,
                users: res.locals.loginSession.obj.id,
                created_at: new Date(),
                updated_at: new Date()
            }

            const errorQueue = await sendMessageToQueue(process.env.THREAD_QUEUE, payload)
            if (errorQueue) return res.status(500).json({ message: errorQueue })

            return res.status(201).json({
                message: "Success creating a new thread!",
                payload
            })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}