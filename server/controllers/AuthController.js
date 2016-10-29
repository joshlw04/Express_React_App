const OrgDAO = require('../services/OrgDAO.js');
const createToken = require('../utils/createOrgToken.js');
const bcrypt = require('bcrypt');

class AuthController {

  static login(req, res) {
    const { email, password } = req.body;
    OrgDAO.findBy({ email })
      .then((org) => {
        if (!bcrypt.compareSync(password, org.password)) {
          res.status(401).end();
        } else {
          req.session.currentUser = org;
          const token = createToken(org);
          res.cookie('token', token);
          res.status(200).json(org);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(401).end();
      });
  }

  static signUp(req, res) {
    const email = req.body.email;
    let password = req.body.password;
    if (email.length > 0 && password.length > 0) {
      password = bcrypt.hashSync(password, 10);
      OrgDAO.create({ email, password })
          .then((user) => {
            req.session.currentUser = user;
            const token = createToken(user);
            res.cookie('token', token);
            res.status(200).json(user);
          })
          .catch((err) => res.status(500).json(err));
    } else {
      res.status(400).end();
    }
  }

  static signOut(req, res) {
    req.session.currentUser = null;
    res.clearCookie('token');
    res.status(204).end();
  }
}

module.exports = AuthController;
