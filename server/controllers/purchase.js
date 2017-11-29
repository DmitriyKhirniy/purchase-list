const Purchase = require('../models').Purchase;
const User = require('../models').User;
const Destination = require('../models').Destination;
const Currency = require('../models').Currency;

module.exports = {
    create(req, res) {
        return Purchase
            .create({
                title: req.body.title,
                description: req.body.description,
                amount: req.body.amount,
                destination: req.body.destination,
                userId: req.body.userId,
                destinationId: req.body.destinationId,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Purchase
            .findAll({
                attributes: ['id', 'title', 'description', 'amount', 'destination'],
                include: [
                    {model: User, attributes: ['id', 'name', 'lastName', 'age']},
                    {model: Currency, attributes: ['id', 'name']}
                ],
            })
            .then(purchases => res.status(200).send(purchases))
            .catch(error => res.status(400).send(error));
    },
    listByUser(req, res) {
        return Purchase
            .findAll({
                where: {userId: req.params.userId},
                attributes: ['id', 'title', 'amount', 'description'],
                include: [{
                    model: Destination,
                    as: 'destination',
                    attributes: ['id', 'title', 'description']
                },  {model: Currency, as: 'currency', attributes: ['id', 'name']}]
            })
            .then(purchases => res.status(200).send(purchases))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return Purchase
            .findById(req.params.purchaseId)
            .then(purchase => {
                if (!purchase) {
                    return res.status(404).send({
                        message: 'Todo Not Found',
                    });
                }
                return purchase
                    .update({
                        title: req.body.title || purchase.title,
                        description: req.body.description || purchase.description,
                        amount: req.body.amount || purchase.amount,
                        destination: req.body.amount || purchase.destination,
                    })
                    .then(() => res.status(200).send(purchase))  // Send back the updated todo.
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Purchase
            .findById(req.params.purchaseId)
            .then(purchase => {
                if (!purchase) {
                    return res.status(404).send({
                        message: 'Purchase Not Found',
                    });
                }
                return res.status(200).send(purchase);
            })
            .catch(error => res.status(400).send(error));
    },
};