const redis = require('redis');

async function connectRedis() {


    // Create a Redis client
    const client = redis.createClient({
        url: 'redis://localhost:6379' // Adjust this URL if your Redis server runs on a different host or port
    });

    // Handle connection
    client.connect()
        .then(() => {
            console.log('Connected to Redis');
        })
        .catch(err => {
            console.error('Redis connection error:', err);
        });

    // Store a value
    async function setValue() {
        await client.set('myKey', 'Hello Redis!');
        console.log('Value set successfully');
    }

    // Retrieve a value
    async function getValue() {
        const value = await client.get('myKey');
        console.log('Retrieved value:', value);
    }

    // Run the functions
    setValue().then(() => getValue());

}

module.exports = connectRedis;