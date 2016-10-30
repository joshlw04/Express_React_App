const GuestDAO = require('../services/GuestDAO');

class GuestController {

  static getAll(req, res) {
    GuestDAO.all().then((guests) => {
      res.status(200).json(guests);
    });
    console.log('coming from GuestController getAll method');
    return 'test';

  }

  static getOne(req, res) {
    GuestDAO.findBy({ id: req.params.id })
           .then((guest) => res.status(200).json(guest));
           console.log('coming from GuestController getOne method');
  }

  static create(req, res) {
    console.log(req.body);
    const guestData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      // user_id: req.session.currentUser.id,
      event_id: req.body.event_id,
    };
    GuestDAO.create(guestData)
           .then((guest) => res.status(200).json(guest));
  }

}

module.exports = GuestController;
