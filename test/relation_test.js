const assert = require('assert');
const User = require('../src/users');

describe('Test de relation', () => {
    it('Test la taille de la liste de livre du user', (done) => {
        const user1 = new User({
            name: 'Romain',
            books: [{ title: 'Les dents de la mer' }, { title: 'Le dernier bar avant la fin du monde' }]
        })
        user1.save().then(() => User.findOne({ name: 'Romain' })
            .then((user) => {
                assert(user.books.length == 2);
                done();
            })
        )
    });

    it('Test ajout de livre à un user', (done) => {
        const user1 = new User({
            name: 'Romain',
        })
        user1.books.push({title:'l\'attaque des poissons géants'})  
        user1.save().then(() => User.findOne({ name: 'Romain' })
            .then((user) => {
                assert(user.books.length == 1);
                done();
            })
        )
    });

    it('Test suppression de livre à un user', (done) => {
        const user1 = new User({
            name: 'Romain',
            books: [{ title: 'Les dents de la mer' }, { title: 'Le dernier bar avant la fin du monde' }]
        })
        user1.books[0].remove(),  
        user1.save().then(() => User.findOne({ name: 'Romain' })
            .then((user) => {
                assert(user.books.length === 1);
                done();
            })
        )
    });
})