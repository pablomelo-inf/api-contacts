const UserRepository = require('../../gateways/database/user-repository');

async function execute(newUser){
    const userCreated =  await UserRepository.createUser(newUser);
    return userCreated;
}

module.exports = execute;
