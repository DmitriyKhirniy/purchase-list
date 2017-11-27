const Purchase = require('../models').Purchase;

module.exports = {
    create(req, res) {
        return Purchase
            .create({
                title: req.body.title,
                description: req.body.description,
                amount: req.body.amount,
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Purchase
            .all()
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