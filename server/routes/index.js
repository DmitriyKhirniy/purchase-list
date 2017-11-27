const purchasesController = require('../controllers').purchases;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));

    app.post('/api/purchase', purchasesController.create);
    app.get('/api/purchase', purchasesController.list);
    app.put('/api/purchase/:purchaseId', purchasesController.update);
};