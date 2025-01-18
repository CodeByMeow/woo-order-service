const { orderFieldMapping, orderMetaDataMapping } = require('../config/field.config')

function transformWebhookData(webhookData) {
	const metaDataMap = Object.fromEntries(webhookData.meta_data?.map(item => [item.key, item.value]));

	return {
		...Object.fromEntries(Object.entries(orderFieldMapping).map(([key, path]) => [key, path.split('.').reduce((obj, p) => obj?.[p], webhookData)])),
		...Object.fromEntries(Object.entries(orderMetaDataMapping).map(([key, metaKey]) => [key, metaDataMap[metaKey] || null]))
	};
}

module.exports = { transformWebhookData }
