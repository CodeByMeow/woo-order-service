const { requiredFields } = require("../config/fields.config")
const AppError = require("../ultils/appError")
const { transformWebhookData } = require("../ultils/handleMapping")
const { asyncHandler } = require("../ultils/asyncHandler")

class WebhookController {
	constructor(service) {
		this.service = service
		this.requiredFields = requiredFields
	}

	validateWebhook(data) {
		for (const field of requiredFields) {
			if (!data[field]) {
				throw new AppError(`Field ${field} is required`, 400)
			}
		}
	}

	handleWebhook = (req, res) => {
		const webhookData = req.body
		this.validateWebhook(webhookData)

		const mappingResult = transformWebhookData(webhookData)

		return res.status(200).json({
			data: mappingResult
		})
	}
}

module.exports = WebhookController
