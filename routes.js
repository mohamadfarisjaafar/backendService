
const Functions = require('.');

module.exports = function (app) {
    app.get('/api/bookingByPnr', Functions.getBookingByPnr_func)
    app.get('/api/token', Functions.getToken_func)
    app.get('/api/test', Functions.getTestResult_func)
    // app.get('/api/connectRedis', Functions.connectRedis_func)

    app.post('/api/login', Functions.login_func)
    // app.post('/api/reverseString', Functions.reverseString_func)
}