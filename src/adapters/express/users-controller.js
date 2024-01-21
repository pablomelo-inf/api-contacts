const {validationResult, Result } = require('express-validator');
const listUser = require('../../useCases/users/list-users');
const createUsers = require('../../useCases/users/create-user');
const useCaseUpdateUser = require('../../useCases/users/update-user');
const useCaseDeleteUser = require('../../useCases/users/delete-user');


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
    },
    async updateUser(request, response)
    {

        const id = parseInt(request.params.id);
        const {nome, email, cpf,telefone, sexo} = request.body;

        const updatedUser = await useCaseUpdateUser(id,{nome, email, cpf, telefone, sexo});

        if(updatedUser){
            response.status(201).json(updatedUser);
        }else{

            response.status(404).json({message: "user not found!"})
        }

    },

    async deleteUser(request, response)
    {

        try{
            const id = parseInt(request.params.id);

            const deletedUser = await useCaseDeleteUser(id);

            if(deletedUser){
                response.json({message: 'User deleted!'})
            }else{

                response.status(404).json({message: "user not found!"})
            }
            
        }catch(error){
            response.status(500).json({ message: 'Fail to delete user' });
        }

    }
}
