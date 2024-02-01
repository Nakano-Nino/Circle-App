import ampq from 'amqplib'
require('dotenv').config()

export default async function sendMessageToQueue(queueName: string, payload: any): Promise<boolean> {
    try {
        const connection = await ampq.connect(process.env.RABBITMQ_URL)
        const channel = await connection.createChannel()

        await channel.assertQueue(queueName)

        channel.sendToQueue(queueName, Buffer.from(JSON.stringify(payload)))

        await channel.close()
        connection.close

        return null
    } catch (error) {
        return error        
    }
}