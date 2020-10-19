import express from 'express'
import mongoose from 'mongoose'

import { Invoice } from './schemas/invoice'
import { Product } from './schemas/product'

import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json())

mongoose.connect(
    "mongodb://localhost:27017/invoice-api-web",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );

app.get('/product', async (req, res) => {
    const products = await Product.find()
    return res.json(products)
})

app.post('/product', async (req, res) => {
    const product = new Product(req.body)
    const newProduct = await Product.create(product)
    return res.json(newProduct)
})

app.post('/invoice', async (req, res) => {
    const invoice = new Invoice(req.body)
    const newInvoice = await Invoice.create(invoice)
    return res.json(newInvoice)
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})
