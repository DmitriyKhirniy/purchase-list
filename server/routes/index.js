const purchasesController = require('../controllers').purchases;
const usersController = require('../controllers').users;
const destinationsController = require('../controllers').destinations;
const currenciesController = require('../controllers').currencies;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));

    app.post('/api/purchase', purchasesController.create);
    app.get('/api/purchase', purchasesController.list);
    app.get('/api/purchases/:userId', purchasesController.listByUser);
    app.put('/api/purchase/:purchaseId', purchasesController.update);
    app.get('/api/purchase/:purchaseId', purchasesController.retrieve);
    app.get('/api/users', usersController.list);
    app.post('/api/users', usersController.create);

    app.post('/api/destinations', destinationsController.create);
    app.get('/api/destinations', destinationsController.list);

    app.post('/api/currencies', currenciesController.create);
    app.get('/api/currencies', currenciesController.list);
};