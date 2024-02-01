const cloudinary = require('cloudinary').v2
import dotenv from "dotenv"

dotenv.config()

export default new class CloudinaryConfig {
    upload() {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
            secure: true
        })
    }

    async destination(image: string) {
        try {
            const cloudinaryRes = await cloudinary.uploader.upload(image)

            return cloudinaryRes.secure_url
        } catch (error) {
            throw error
        }
    }

    async delete(image: string) {
        try {
            const cloudinaryDelete = await cloudinary.uploader.destroy(image)

            return cloudinaryDelete.result
        } catch (error) {
           throw error 
        }
    }
}
// const cloudinary = require('cloudinary').v2
// require('dotenv').config()

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// })

// export default cloudinary