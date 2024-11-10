const crypto = require('crypto');
const fs = require('fs');

// Function to wrap and encrypt data
function encryptUserData(userId, name) {
    const userData = {
        userId: userId,
        name: name
    };

    // Convert JSON to string
    const jsonString = JSON.stringify(userData);

    // Read the private key from file (assuming it's in PEM format)
    const privateKey = fs.readFileSync('private.pem', 'utf8');

    // Encrypt the data using RSA private key
    const encryptedData = crypto.privateEncrypt(privateKey, Buffer.from(jsonString));

    // Convert the encrypted data to base64 for better readability/storage
    const encryptedBase64 = encryptedData.toString('base64');

    console.log(encryptedBase64);

    return encryptedBase64;  // Return the encrypted string
}

module.exports = encryptUserData;