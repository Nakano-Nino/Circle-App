import { Repository } from "typeorm";
import { Following } from "../entity/following";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

export default new class FollowingServices {
    private readonly FollowingRepository: Repository<Following> = AppDataSource.getRepository(Following)

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const result = await this.FollowingRepository.find({relations: ["userId", "followers"]})
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body
            const loginSession = res.locals.loginSession

            const followingSelected: Following | null = await this.FollowingRepository.findOne({where:{userId: loginSession.obj.id, followers: data.followers}})

            if (followingSelected) {
                await this.FollowingRepository.remove(followingSelected)
                return res.status(200).json({message: "unfollowed"})
            }

            const following = this.FollowingRepository.create({
                followers: data.followers,
                userId: loginSession.obj.id
            })

            const createFollowing = await this.FollowingRepository.save(following)
            
            return res.status(200).json(createFollowing)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id
            const result = await this.FollowingRepository.delete({id: Number(id)})
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}