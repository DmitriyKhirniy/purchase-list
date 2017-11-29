const User = require('../models').User;
const Purchase = require('../models').Purchase;
const Destination = require('../models').Destination;

module.exports = {
    create(req, res) {
        return User
            .create({
                name: req.body.name,
                lastName: req.body.lastName,
                age: req.body.age,
                birthDate: req.body.birthDate,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return User
            .findAll({
                attributes: ['id', 'name', 'lastName', 'age', 'birthDate'],
                include: [{
                    model: Purchase,
                    as: 'purchaseItems',
                    attributes: ['id', 'title', 'amount', 'description'],
                    include: [{
                        model: Destination,
                        attributes: ['id', 'title', 'description']
                    }]
                }],
                order: [ [ {model: Purchase, as: 'purchaseItems'}, 'amount', 'DESC' ]]
            })
            .then(purchases => res.status(200).send(purchases))
            .catch(error => res.status(400).send(error));
    }
};