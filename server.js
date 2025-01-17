require("dotenv").config()

const express = require("express")
const crypto = require("crypto")

const app = express()
const port = process.env.PORT || 3000
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

app.use(express.json())

const verifyWooCommerceWebhook = (req, res, next) => {
	const signature = req.headers['x-wc-webhook-signature'];

	if (!signature) {
		return res.status(401).json({ error: 'No signature found' });
	}

	const payload = JSON.stringify(req.body);
	const hmac = crypto
		.createHmac('sha256', WEBHOOK_SECRET)
		.update(payload)
		.digest('base64');

	if (hmac !== signature) {
		return res.status(401).json({ error: 'Invalid signature' });
	}

	next();
};

app.get("/", (req, res) => {
	res.status(200).json({
		data: "server is up and running",
	})
})

app.post("/webhook/new-order", (req, res) => {
	const payload = req.body
	console.log(payload)
	res.status(200).json({
		payload
	})
})

app.listen(port, (req, res) => {
	console.log(`Server is running on port ${port}`)
	console.log(`Environment: ${process.env.NODE_ENV}`)
})
