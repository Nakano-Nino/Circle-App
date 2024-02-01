import express from "express"
import repliesController from "../controller/repliesController"
import AuthMiddleware from "../middlewares/jwtAuth"
import uploadImage from "../middlewares/uploadImage"

const repliesRoute = express.Router()
repliesRoute.get("/replies/:id", repliesController.findAll)
repliesRoute.get("/replies", repliesController.countAll)
repliesRoute.get("/replies/:id", repliesController.getOne)
repliesRoute.post("/replies/:id", AuthMiddleware, uploadImage.Upload("image"), repliesController.create) 
// repliesRoute.put("/thread/:id", jwtAuth.Authentification, threadController.update)
// repliesRoute.delete("/thread/:id", jwtAuth.Authentification, threadController.delete)

export default repliesRoute