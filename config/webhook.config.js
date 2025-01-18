const API_VERSION = 'v1'

const BASE_ROUTES = {
	API: '/api',
	ORDERS: '/orders',
}
const API_ROUTES = {
	NEW_ORDER: `${BASE_ROUTES.API}/${API_VERSION}${BASE_ROUTES.ORDERS}/new`
}

module.exports = API_ROUTES
