function setGetHeaders(res) {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET')
    res.set('Access-Control-Allow-Headers', 'Red-Middleware-Token, App-Name')
    return res
}

function setPostHeaders(res) {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'POST')
    res.set(
        'Access-Control-Allow-Headers',
        'Content-Type, Red-Middleware-Token, App-Name'
    )
    return res
}

function setDeleteHeaders(res) {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'DELETE')
    res.set(
        'Access-Control-Allow-Headers',
        'Content-Type, Red-Middleware-Token, App-Name'
    )
    return res
}

function setPreflightHeaders(res) {
    res.set('Access-Control-Allow-Methods', 'GET, HEAD, PUT, POST, OPTIONS, DELETE')
    res.set(
        'Access-Control-Allow-Headers',
        'Content-Type, Red-Middleware-Token, App-Name'
    )
    res.set('Access-Control-Max-Age', '3600')
}

module.export = {
    setGetHeaders,
    setPostHeaders,
    setDeleteHeaders,
    setPreflightHeaders
}
