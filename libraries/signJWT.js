const pem = require("pem");
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const pfxPath = process.env.PFXPATH;
// Read the PFX file
const rootDir = path.resolve(__dirname, '../');
const pfx = fs.readFileSync(rootDir + pfxPath);

// Function to extract the private key from PFX and sign a JWT
async function signJwt(payload, p12Password) {
    return new Promise((resolve, reject) => {
        pem.readPkcs12(pfx, { p12Password }, (err, cert) => {
            if (err) {
                return reject({ status: 'error', message: 'Error reading PFX file: ' + err });
            }

            const privateKey = cert.key; // Extract the private key from the certificate
            const options = {
                algorithm: 'RS256', // Use RS256 algorithm for signing
                expiresIn: '30d' // Token expiry time
            };

            // Sign the JWT with the private key
            jwt.sign(payload, privateKey, options, (signErr, token) => {
                if (signErr) {
                    return reject({ status: 'error', message: 'Error signing JWT: ' + signErr });
                }
                const base64String = Buffer.from(token).toString('base64');
                // Wrap the token result in a JSON response
                resolve({ status: 'success', token ,base64String});
            });
        });
    });
}

module.exports = signJwt;