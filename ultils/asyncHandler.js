const asyncHandler = fn => (req, res, next) => {
	Promise.resolve(fn(req, res, text)).catch(next)
}

module.exports = asyncHandler
