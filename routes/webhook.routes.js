const express = require("express")
const router = express.Router()
const { verifyWooCommerceWebhook } = require("../middlewares/webhookVerifySignature")
const WebhookController = require("../controllers/webhook.controller")
const PancakesService = require("../services/pancake.service")
const API_ROUTES = require("../config/webhook.config")

const webhookController = new WebhookController(new PancakesService())

//router.use(verifyWooCommerceWebhook)
router.post(API_ROUTES.NEW_ORDER, webhookController.handleWebhook)

module.exports = router
