import express from "express"
import likesController from "../controller/likesController"
import AuthMiddeware from "../middlewares/jwtAuth"

const likesRoute = express.Router()
likesRoute.get("/likes", likesController.findAll)
likesRoute.post("/like", AuthMiddeware, likesController.create) 
likesRoute.delete("/like/:id", AuthMiddeware, likesController.delete)

export default likesRoute