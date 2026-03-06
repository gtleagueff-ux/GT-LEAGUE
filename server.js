import express from "express"
import mercadopago from "mercadopago"

const app = express()
app.use(express.json())

mercadopago.configure({
access_token: "APP_USR-4129692016500650-030614-4b465773964cd97b1aa07678f5b18aac-3248292023"
})

app.post("/api/pagar", async(req,res)=>{

const {nick,pix} = req.body

const payment = await mercadopago.preferences.create({

items:[{
title:"Entrada GT League",
quantity:1,
currency_id:"BRL",
unit_price:5
}],

metadata:{
nick:nick,
pix:pix
}

})

res.json({link: payment.body.init_point})

})

app.listen(3000)
