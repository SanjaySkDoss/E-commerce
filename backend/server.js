import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()
const app = express() //initializing express

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('HEY')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(
  port,
  console.log(`The server is running in ${process.env.X} on ${port}`)
)
