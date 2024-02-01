import { Repository } from "typeorm";
import { Following } from "../entity/following";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

export default new class FollowerServices {
    private readonly FollowerRepository: Repository<Following> = AppDataSource.getRepository(Following)

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.FollowerRepository.find({relations: ["followerToUser"]})
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async create (req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body
            const follower = await this.FollowerRepository.create({
                following: data.following,
            })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}