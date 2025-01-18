const PancakeService = require("../services/pancake.service")
const asyncHandler = require("../middlewares/asyncHandler")
const AppError = require("../ultils/appError")

class PancakeController {
	constructor(pancakeService) {
		this.pancakeService = pancakeService
	}
}
