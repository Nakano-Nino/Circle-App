import { Replies } from "../entity/replies"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { Request, Response } from "express"
import cloudinary from "../libs/cloudinary"
import fs from "fs"
import { Threads } from "../entity/Threads"

export default new class ReplyServices {
    private readonly ReplyRepository: Repository<Replies> = AppDataSource.getRepository(Replies)

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.ReplyRepository.find({where: {threads: {id: Number(req.params.id)}}, relations: ['users']})
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async countAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.ReplyRepository.find({relations: ['thread']})

            const repliesCount = result.reduce((acc, curr) => acc + curr.threads.replies.length, 0)

            console.log(repliesCount);
            
            return res.status(200).json(repliesCount)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const result = await this.ReplyRepository.findOne({ where: {id: Number(id)}, relations: ['users', 'thread'] })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const  userId = res.locals.loginSession.obj.id
            const threadId = req.params.id
            const image = req.file.filename
            const data = req.body
            let imageUrl = ""

            if(image){
                let cloudinaryResponse = await cloudinary.destination("src/uploads/" + image)
                imageUrl = cloudinaryResponse
                fs.unlinkSync("src/uploads/" + image)
            }
            
            const thread = await AppDataSource.getRepository(Threads).findOneBy({id: Number(threadId)});

            const obj = this.ReplyRepository.create({
                content: data.content,
                image: imageUrl,
                created_at: new Date(),
                updated_at: new Date(),
                users: userId,
                threads: thread
            })
            const result = await this.ReplyRepository.save(obj)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json("Ada error coy " + error)
        }
    }


}