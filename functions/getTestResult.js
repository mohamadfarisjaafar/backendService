async function getTestResult(req, res) {
    res.json({
        message: 'API is online',
        response: 'Can start calling APIs',
    });
}

module.exports = getTestResult