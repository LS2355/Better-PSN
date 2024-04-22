const setRateLimit = require("express-rate-limit");

//this just limits how often i can make calls to the api
const rateLimitMiddleware = setRateLimit({
    windowMS: 30 * 1000, //timeframe
    max: 8, //how many calls can be made
    message: "you have exceeded your request limit of 1 request per 30 seconds",
})

module.exports = rateLimitMiddleware
