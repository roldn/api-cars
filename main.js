import express from 'express'
import carRouter from './routers/car-routers.js'

const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Listening at http://localhost:${process.env.PORT}`)
})

app.use('/cars', carRouter)