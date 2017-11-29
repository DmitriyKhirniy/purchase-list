const Destination = require('../models').Destination;

module.exports = {
    create(req, res) {
        return Destination
            .create({
                title: req.body.title,
                description: req.body.description,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Destination
            .findAll({
                attributes: ['id', 'title', 'description']
            })
            .then(list => res.status(200).send(list))
            .catch(error => res.status(400).send(error));
    },
}