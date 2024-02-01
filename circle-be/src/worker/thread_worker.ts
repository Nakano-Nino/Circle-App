import { EventEmitter } from "stream";
import amqp from "amqplib"
import cloudinary from "../libs/cloudinary";
import { Repository } from "typeorm";
import { Threads } from "../entity/Threads";
import { AppDataSource } from "../data-source";
import { request } from "http";
import { response } from "express";

export default new class ThreadWorker extends EventEmitter {
    private readonly threadRepository: Repository<Threads> = AppDataSource.getRepository(Threads)
    
    async create(queueName: string, connect: amqp.Connection) {
        try {           
            const channel = await connect.createChannel()            

            await channel.assertQueue(queueName)
            await channel.consume(queueName, async (message) => {
                if(message !== null) {
                    try {
                        
                        const payload = JSON.parse(message.content.toString())

                        console.log(payload.users);      

                        const uploadCloudinary = await cloudinary.destination("src/uploads/" + payload.image)

                        const obj = this.threadRepository.create({
                            content: payload.content,
                            image: uploadCloudinary,
                            users: payload.users,
                            created_at: new Date(),
                            updated_at: new Date(),
                        })

                        await this.threadRepository.save(obj)

                        const req = request({
                            hostname: "localhost",
                            port: 3000,
                            path: "/api/v1/notification",
                            method: "GET"
                        })

                        req.on("response", (response) => {
                            console.log(response);
                            
                        })

                        req.on("error", (error) => {
                            console.log(error);
                        })

                        req.end()

                        channel.ack(message)
                    } catch (error) {
                        console.log(error);
                    }
                }
            })
        } catch (error) {
            
        }
    }

    async update(queueName: string, connect: amqp.Connection) {
        try {
            const channel = await connect.createChannel()            

            await channel.assertQueue(queueName)
            await channel.consume(queueName, async (message) => {
                if(message !== null) {
                    try {
                        const payload = JSON.parse(message.content.toString())

                        
                    } catch (error) {
                       console.log(error);
                       
                    }
                }
            })
        } catch (error) {
            
        }
    }
}