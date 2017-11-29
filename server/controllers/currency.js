const Currency = require('../models').Currency;

module.exports = {
    create(req, res) {
        return Currency
            .create({
                name: req.body.name
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Currency
            .findAll()
            .then(list => res.status(200).send(list))
            .catch(error => res.status(400).send(error));
    },
}