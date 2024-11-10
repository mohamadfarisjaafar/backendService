require('dotenv').config();
const pfxPass = process.env.PFXPASS;

const signJwt = require('../libraries/signJWT');

async function getToken(req, res) {
    const name = req.query.name;
    const phone = req.query.phone;
    const email = req.query.email;
    console.log('getToken');

    const payload = { name: name, phone: phone , email: email}; // Example payload
    const p12Password = pfxPass; // Password for the PFX
    // Check if both parameters are provided
    if (!name || !phone) {
        return res.status(400).json({ error: 'Missing parameters. Please provide both param1 and param2.' });
    }

    signJwt(payload, p12Password)
        .then(response => {
            res.json({
                message: 'JWT created successfully',
                response,
            });
        })
        .catch(error => {
            console.error(JSON.stringify(error, null, 2)); // Log the error as a JSON object
            res.status(500).json({
                error: 'Failed to process PFX file',
                details: error.message,
            });
        });
}

module.exports = getToken;