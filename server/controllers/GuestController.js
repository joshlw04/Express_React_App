const GuestDAO = require('../services/GuestDAO');

class GuestController {

  static getAll(req, res) {
    GuestDAO.all().then((guests) => {
      res.status(200).json(guests);
    });
  }

  static getOne(req, res) {
    GuestDAO.findBy({ id: req.params.id })
           .then((guest) => res.status(200).json(guest));
  }
}

module.exports = GuestController;
