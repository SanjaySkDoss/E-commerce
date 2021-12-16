import express from 'express'
import products from '../model/productModel.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const Products = await products.find({})
    res.json(Products)
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await products.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      console.log('oops')
      throw new Error('Product not found')
    }
  })
)

export default router
