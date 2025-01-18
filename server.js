require("dotenv").config()

const express = require("express")
const app = express()

const webhookRouter = require("./routes/webhook.routes")
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
	res.status(200).send("server is up and running")
})

app.use(webhookRouter)

app.listen(port, (_req, res) => {
	console.log(`Server is running on port ${port}`)
})

