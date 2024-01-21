const mysqlConnector = require('./mysql-connector');
const User = require('../../entities/user');

async function listUser() {
    try{
        const [rows] = await mysqlConnector.query('SELECT * FROM users')
        const users = rows.map(row => new User(row))
        return users
    }catch(error){
        console.error('Error to list users',error)
        throw error
    }
}

async function getUserFromId(id) {
}

async function createUser(newUser) {
    const {nome, email, cpf, sexo} = newUser;
    try{
        const [result, metadata] = await mysqlConnector.query(
            'INSERT INTO users (nome, email, cpf, sexo) VALUES (:nome, :email, :cpf, :sexo)',
            { replacements: { nome, email, cpf, sexo },  type: mysqlConnector.QueryTypes.INSERT }
        );
        const UserCreated = {id: result.insertId, ...newUser}


    }catch(error){
       // console.log('Fail to registry User in database',error);
        //throw new error
    }

}

async function updateUser(id, updateData) {
}

async function removeUser(id) {
}

module.exports = {
    listUser,
    getUserFromId,
    createUser,
    updateUser,
    removeUser
};
