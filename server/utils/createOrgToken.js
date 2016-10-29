const jwt = require('jsonwebtoken');

function createOrgToken(organizer) {
  return jwt.sign(organizer, process.env.JWT_SECRET, { expiresIn: 10080 });
}

module.exports = createOrgToken;
