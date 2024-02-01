import express from "express"
import threadController from "../controller/threadController"
import AuthMiddleware from "../middlewares/jwtAuth"
import uploadImage from "../middlewares/uploadImage"

const threadRoute = express.Router()
threadRoute.get("/thread", threadController.findAll)
threadRoute.get("/thread/:id", threadController.getOne)
threadRoute.post("/thread", AuthMiddleware, uploadImage.Upload("image"), threadController.create)
threadRoute.put("/thread/:id", AuthMiddleware, uploadImage.Upload("image"), threadController.update)
threadRoute.delete("/thread/:id", AuthMiddleware, threadController.delete)

export default threadRoute