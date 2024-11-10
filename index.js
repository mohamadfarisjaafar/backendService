const getBookingByPnr = require('./functions/getBooking');
const getToken = require('./functions/getToken');
const getTestResult = require('./functions/getTestResult');
const login = require('./functions/login');
const reverseString = require('./functions/reverseString');
const connectRedis = require('./common/redis');


function getBookingByPnr_func(req, res) {
    return getBookingByPnr(req, res)
}

function getToken_func(req, res) {
    return getToken(req, res)
}

function getTestResult_func(req, res) {
    return getTestResult(req, res)
}

function login_func(req, res) {
    return login(req, res)
}

function reverseString_func(req, res) {
    return reverseString(req, res)
}

function connectRedis_func(req, res) {
    return connectRedis(req, res)
}

module.exports = {
    getBookingByPnr_func,
    getToken_func,
    getTestResult_func,
    login_func,
    connectRedis_func
};