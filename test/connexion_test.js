const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/books_test', {
    //useMongoClient: true  => non utile depuis la V5 de mongo
});

before((done) => {
    mongoose.connection
    .once('open', () => {
        console.log('connexion établie');
        done();
    })
    .on('error', (error) => {
        console.warn('error durant la connexion', error);
    })
})

beforeEach ('Delete old Books', (done) => {
    const {books, users} = mongoose.connection.collections;
    books.drop( () => {
        users.drop( () => {
            done();
        })
    })
})