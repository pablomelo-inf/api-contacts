const express = require('express');
const UsersController = require('./users-controller');

const router = express.Router();
router.get('/users', UsersController.list);
router.post('/create-user', UsersController.createUser);
router.put('/update-user/:id', UsersController.updateUser);
router.delete('/delete-user/:id', UsersController.deleteUser);

module.exports = router;
