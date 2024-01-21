const {validationResult, Result } = require('express-validator');
const listUser = require('../../useCases/users/list-users');
const createUsers = require('../../useCases/users/create-user');

class CreateUserDTO {
    constructor({ nome, email }) {
      this.nome = nome;
      this.email = email;
    }
}

module.exports = {
    async list(request, response)
    {
        const users = await listUser();
        response.json(users);
    },

    
    async createUser(request, response)
    {   
        const {nome, email, cpf, sexo} = request.body;     
        const createdUser = await createUsers({nome, email, cpf, sexo});
        response.status(201).json(createdUser);
    }
}