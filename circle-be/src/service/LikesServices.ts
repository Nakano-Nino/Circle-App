import { Repository } from "typeorm"
import { Likes } from "../entity/likes"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"

export default new class LikesServices {
    private readonly LikesRepository: Repository<Likes> = AppDataSource.getRepository(Likes)

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.LikesRepository.find({relations: ['users', 'threads']})
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const user = res.locals.loginSession.obj.id
            const data = req.body
            
            const likeSelected: Likes | null = await this.LikesRepository.findOne({
                where: {
                    users: { id: user },
                    threads: { id: Number(data.threadId) }
                }
            })

            if (likeSelected) {
                await this.LikesRepository.remove(likeSelected)
                return res.status(200).json({ message: "unliked" })
            }

            const likes = this.LikesRepository.create({
                threads: { id: Number(data.threadId) },
                users: { id: user }
            })

            const createLikes = await this.LikesRepository.save(likes)
            res.status(200).json(createLikes)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const result = await this.LikesRepository.findOne({ where: {threads: {id: Number(id)}}, relations: ['users', 'threads'] })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const findOne = await this.LikesRepository.findOne({ where: {threads: {id: Number(id)}}, relations: ['users', 'threads'] })
            const result = await this.LikesRepository.delete(findOne)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}