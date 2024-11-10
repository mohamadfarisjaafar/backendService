const setPreflightHeaders = require('../common/commonHeader');

async function login_func(req, res) {
    res.set('Access-Control-Allow-Origin', '*')
    if (req.method === 'OPTIONS') {
        // Send response to OPTIONS requests
        setPreflightHeaders(res)
        res.status(204).send('')
    } else {
        try {
            const loginResponse = await loginFlow(req)
            res.status(200).send(loginResponse)
        } catch (error) {
            console.error('Login Error: ', error)
            errorHandler(res, error?.response || error, 'Login Error')
        }
    }
}

async function loginFlow(req) {
    // validate
    const appName = get(req, 'headers.app-name', '').toLowerCase()
    const appKey = getAppKeyByAppName(appName)
    const authService = new AuthService(appKey)

    if (![APP_NAMES.RedApp, APP_NAMES.RedWeb].includes(appName)) {
        throw createError({
            statusCode: 403,
            description: 'App name should be one of [redweb, redapp]',
            message: 'Invalid App Name',
        })
    }

    return await credentialLogin(req, authService, appKey)
}