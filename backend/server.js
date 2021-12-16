import express from 'express'
import dotenv from 'dotenv'
import db from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoute.js'

dotenv.config()
db()
const app = express() //initializing express

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('HEY')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(
  port,
  console.log(`The server is running in ${process.env.NODE_ENV} on ${port}`)
)
