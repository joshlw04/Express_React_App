const GuestDAO = require('../services/GuestDAO');

class GuestController {

  static getAll(req, res) {
    GuestDAO.all().then((guests) => {
      res.status(200).json(guests);
    });
    console.log('coming from GuestController getAll method');

  }

  static getOne(req, res) {
    GuestDAO.findBy({ id: req.params.id })
           .then((guest) => res.status(200).json(guest));
           console.log('coming from GuestController getOne method');

  }
}

module.exports = GuestController;
