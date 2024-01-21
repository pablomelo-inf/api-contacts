const UserRepository = require('../../gateways/database/user-repository');

async function execute(id){
    return await UserRepository.deleteUser(id);

}

module.exports = execute;
