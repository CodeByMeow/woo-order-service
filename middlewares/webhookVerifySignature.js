const crypto = require("crypto")
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

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

module.exports = { verifyWooCommerceWebhook }
