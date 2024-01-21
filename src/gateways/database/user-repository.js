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
       console.log('Fail to registry User in database',error);
        //throw new error
    }
}

async function updateUser(id, userData) {
    try{
        const {nome, email, cpf, telefone, sexo} = userData;
        const [user] = await mysqlConnector.query('SELECT * FROM users WHERE id = :id',{replacements: {id}});

        if(!user.length){
            return null;
        }

        userUpdated = await mysqlConnector.query(
            'UPDATE users SET nome = :nome, email = :email, cpf = :cpf, telefone = :telefone, sexo = :sexo WHERE id = :id',
             {replacements: {id,nome, email, cpf, telefone, sexo}});

        return 1

    }catch(error){
        console.log('Fail to update User in database',error);
    }
}

async function deleteUser(id) {
    try{
        const [user] = await mysqlConnector.query('SELECT * FROM users WHERE id = :id',{replacements: {id}});
        if(!user.length){
            return null;
        }

        userDeleted = await mysqlConnector.query('DELETE FROM users  WHERE id=:id',{replacements: {id}});

        return 1
    }catch(error){
        console.log('Fail to delete User in database', error);
    }
}

module.exports = {
    listUser,
    getUserFromId,
    createUser,
    updateUser,
    deleteUser
};
