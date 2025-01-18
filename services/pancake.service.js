const axios = require('axios')
const { PANCAKE_CONFIG, PANCAKE_ROUTES } = require('../config/pancake.config')

class PancakeService {
	constructor() {
		this.api = axios.create({
			baseURL: PANCAKE_CONFIG.BASE_URL,
			timeout: PANCAKE_CONFIG.TIMEOUT,
			params: {
				api_key: PANCAKE_CONFIG.API_KEY
			}
		})
	}

	async sendOrderDataToPancake(data) {
		try {
			const response = await this.api.post(PANCAKE_ROUTES.NEW_ORDER, data)
			return response.data
		} catch (error) {
			throw this.handleError(error)
		}
	}

	handleError(error) {
		if (error.response) {
			throw new AppError(error.response.data.message, error.response.status)
		} else if (error.request) {
			throw new AppError(error.request)
		}

		throw error
	}
}

module.exports = PancakeService
