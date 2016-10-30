const EventDAO = require('../services/EventDAO');

class EventController {

  static getAll(req, res) {
    EventDAO.all().then((events) => {
      res.status(200).json(events);
    });
    console.log('coming from EventController getAll method');
  }

  static getOne(req, res) {
    EventDAO.findBy({ id: req.params.id })
           .then((event) => res.status(200).json(event));
           console.log('coming from EventController getOne method');
  }

  static create(req, res) {
    console.log(req.body);
    const eventData = {
      name: req.body.name,
      location: req.body.location,
    };
    EventDAO.create(eventData)
           .then((event) => res.status(200).json(event));
  }

}

module.exports = EventController;
