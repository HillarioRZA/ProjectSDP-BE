const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const createNewToken = (payload) => {
    return jwt.sign({ userId: payload }, jwtSecret, { expiresIn: '10d' });
}

module.exports = { createNewToken }