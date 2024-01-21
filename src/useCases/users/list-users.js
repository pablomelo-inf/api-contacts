const UserRepository = require('../../gateways/database/user-repository');

async function execute(){
    return UserRepository.listUser();
}

module.exports = execute;