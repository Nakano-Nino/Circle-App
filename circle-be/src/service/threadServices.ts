import { Threads } from "../entity/Threads"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { Request, Response } from "express"
import {v2} from "cloudinary"
import { extractPublicId } from "cloudinary-build-url"
import cloudinary from "../libs/cloudinary"
import fs from "fs"
import { redisClient } from "../libs/redis"

export default new class ThreadServices {
    private readonly ThreadRepository: Repository<Threads> = AppDataSource.getRepository(Threads)

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            // const cache = await redisClient.get("threads")

            // if (cache != null) {
            //     console.log("ini dari cache");
                
            //     res.status(200).json(JSON.parse(cache))
            // } else {
            //     const result = await this.ThreadRepository.find({relations: ["users", "replies", "likes.users"], order: {created_at: "DESC"}})
            //     redisClient.set("threads", JSON.stringify(result), { EX: 60 })
            //     console.log("ini dari database");
            //     return res.status(200).json(result)
            // }
            const result = await this.ThreadRepository.find({relations: ["users", "replies", "likes.users"], order: {created_at: "DESC"}})
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id

            const result = await this.ThreadRepository.findOne({ where: {id: Number(id)}, relations: ['users', 'likes.users', 'replies'] })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    // async create(req: Request, res: Response): Promise<Response> {
    //     try {
    //         const userId = res.locals.loginSessssion.obj.id
            
    //         const data = req.body
    //         console.log(req.file.path);
            
    //         let imageUrl: string = ""
            
    //         if(req.file){
    //             let cloudinaryResponse = await cloudinary.uploader.upload(req.file.path)
    //             imageUrl = cloudinaryResponse.secure_url
    //             fs.unlinkSync(req.file.path)
    //         }

    //         const obj = this.ThreadRepository.create({
    //             content: data.content,
    //             image: imageUrl,
    //             created_at: new Date(),
    //             updated_at: new Date(),
    //             users: userId,
    //         })
    //         const result = await this.ThreadRepository.save(obj)
    //         return res.status(201).json(result)
    //     } catch (error) {
    //         return res.status(500).json(error)
    //     }
    // }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const userId = res.locals.loginSession.obj.id
            const threadId = req.params.id
            const data = req.body
            const uploaded = req.file.path
            let imageUrl: string = ""

            const fetched = await this.ThreadRepository.findOne({ where: { id: Number(threadId) }, relations: ["users"] })
            if (!fetched) return res.status(404).json({ message: "Thread not found" })

            if (userId != fetched.users.id) {
                return res.status(401).json({ message: "Unauthorized" })
            }

            let url = fetched.image as string
            const publicId = extractPublicId(url)

            await v2.uploader.destroy(publicId)

            if(fs.existsSync(uploaded)){
                let cloudinaryResponse = await cloudinary.destination(uploaded)
                imageUrl = cloudinaryResponse
                fs.unlinkSync(uploaded)
            }

            const obj = this.ThreadRepository.create({
                id: Number(threadId),
                content: data.content,
                image: imageUrl,
                created_at: new Date(),
                updated_at: new Date()
            })
            this.ThreadRepository.merge(fetched, obj)
            const result = await this.ThreadRepository.save(fetched)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const userId = res.locals.loginSession.obj.id
            const threadId = req.params.id

            const fetched = await this.ThreadRepository.findOne({ where: { id: Number(threadId) }, relations: ["users"] })
            if (!fetched) return res.status(404).json({ message: "Thread not found" })

            if (userId != fetched.users.id) {
                return res.status(401).json({ message: "Unauthorized" })
            }

            let url = fetched.image as string
            const publicId = extractPublicId(url)

            await cloudinary.delete(publicId)

            const result = await this.ThreadRepository.delete({ id: Number(threadId) })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}