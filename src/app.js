import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// Add Content Security Policy header middleware
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'none'; style-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; font-src https://fonts.gstatic.com; script-src 'self'; connect-src 'self'; img-src 'self' data:;")
    next()
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import UserRouter from './routes/User.routes.js'

//routes declaration
app.use("/api/v1/users", UserRouter);

// http://localhost:8000/api/v1/users/register

export { app }
