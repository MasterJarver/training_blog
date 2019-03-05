const config = require('./config');
const mongoose = require('mongoose');
module.exports = () => { // экспортируем результат функции
    return new Promise((resolve, reject) => { // возврат нового промиса
        mongoose.Promise = global.Promise;
        mongoose.set('debug', true);
        mongoose.connection
            .on('error', error => reject(error))
            .on('close', () => console.log('Database connection closed.'))
            .once('open', () => resolve(mongoose.connections[0]));
        mongoose.connect(config.MONGO_URL);
    });
};