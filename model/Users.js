import {getData} from './db.js';
import Sequelize from 'sequelize';


const User = getData.sequelizeClient.define('users',{
    id: {type: Sequelize.SMALLINT, primaryKey: true},
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phone_number: Sequelize.STRING,
},{
    tableName: 'users',
    createdAt: false,
    updatedAt: false,
});

export const getUser = User;

