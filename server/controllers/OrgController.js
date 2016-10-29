const OrgDAO = require('../services/OrgDAO');

class OrgController {

  static getAll(req, res) {
    OrgDAO.all().then((organizers) => {
      res.status(200).json(organizers);
    });
  }
  static getOne(req, res) {
    OrgDAO.findBy({ id: req.params.id })
           .then((organizer) => res.status(200).json(organizer));
  }
}

module.exports = OrgController;
