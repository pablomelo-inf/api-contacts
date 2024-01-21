const UserRepository = require('../../gateways/database/user-repository');

async function execute(id, newUser){
    const userUpdated =  await UserRepository.updateUser(id, newUser);
    return userUpdated;
}

module.exports = execute;
