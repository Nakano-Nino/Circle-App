import { AppDataSource } from "./data-source"
import express from "express"
import session  from "express-session"
import userRoute from "./routes/userRouter"
import threadRoute from "./routes/threadRouter"
import repliesRoute from "./routes/repliesRouter"
import cloudinary from "./libs/cloudinary"
import dotenv from "dotenv"
import { redisConnect } from "./libs/redis"
import likesRoute from "./routes/likesRouter"

var cors = require('cors')
dotenv.config()

AppDataSource.initialize().then(async () => {

    const app = express()
    const router = express.Router()
    cloudinary.upload()
    redisConnect()
    const port = process.env.port || 3000

    app.use(session({
        secret: process.env.JWT_SECRET,
        resave: false,
        saveUninitialized: true
    }))

    const optionCors = {
        origin: '*',
        credential: true,
        methods: 'GET,PATCH,POST,DELETE'
    }

    app.use(cors(optionCors))
    app.use(express.json())
    app.use("/api/v1", userRoute)
    app.use("/api/v1", threadRoute)
    app.use("/api/v1", repliesRoute)
    app.use("/api/v1", likesRoute)

    router.get("api/v1/notification", (req: express.Request, res: express.Response) => {
        res.setHeader("Content-Type", "text/event-stream")
        res.setHeader("Connection", "keep-alive")
        res.setHeader("Cache-Control", "no-cache")

        function sendNotification(data: any) {
            res.write("data" + data)
        }

        router.get("/new-thread", (req, res) => {
            const data = JSON.stringify({ message: "Success create thread1"})
            sendNotification(data)

            res.status(200)
        })
    })

    app.listen(port, () => `app listeing on port ${port}`)

}).catch(error => console.log(error))
