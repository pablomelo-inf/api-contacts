const express = require('express');
const UsersController = require('./users-controller');

const router = express.Router();
console.log(router)
router.get('/users', UsersController.list);
router.post('/create-user', UsersController.createUser);

module.exports = router;