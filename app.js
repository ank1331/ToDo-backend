require("dotenv").config();
const express = require("express");
const useRoute = require("./router/userRoute");
const connectToDB = require("./config/db")
const bodyParser = require("body-parser")




const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(bodyParser.json())
connectToDB()

app.use("/", useRoute)

module.exports=app