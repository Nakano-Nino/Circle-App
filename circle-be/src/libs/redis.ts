import { createClient } from "redis"

export const redisClient = createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT)
    }
})

export async function redisConnect() {
    await redisClient.connect()
}

export const DEFAULT_EXPIRATION = 60