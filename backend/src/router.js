const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddlewares');

const router = express.Router();

router.get('/tasks', tasksController.getAll);

router.post('/tasks', tasksMiddleware.validateFieldTitleAndDescription, tasksController.createTask);

router.delete('/tasks/:id', tasksController.deletedTask);

router.put('/tasks/:id', tasksMiddleware.validateStatus, tasksMiddleware.validateFieldTitleAndDescription, tasksController.updateTask);


module.exports = router;