const express = require("express");
const router = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');
const productsController = require('./controllers/productsController');
const customersController = require('./controllers/customersController');

// Rota para ver todos os clientes/pedidos
router.get("/customers", customersController.getCustomers);

// Rota para popular produtos do JSON (apenas uma vez)
router.post('/populate-products', productsController.populateProductsFromJSON);

// CRUD de produtos
router.get('/products', productsController.getAll);
router.post('/products', productsController.createProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

// Rotas de tasks
router.get('/tasks', tasksController.getAll); 
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',  
    tasksMiddleware.validateFieldTitle, 
    tasksMiddleware.validateFieldStatus,
    tasksController.updateTask
);

module.exports = router;
