import { AppDataSource } from "../data-source";
import cloudinary from "../libs/cloudinary";
import amqp from "amqplib"
import thread_worker from "./thread_worker";
require('dotenv').config()

export default new class WorkerHub {
    constructor() {
        AppDataSource.initialize()
        .then(async () => {
            cloudinary.upload()

            const connection = await amqp.connect(process.env.RABBITMQ_URL)

            await thread_worker.create(process.env.THREAD_QUEUE, connection)        
        })
        .catch(error => console.log(error))
    }
}