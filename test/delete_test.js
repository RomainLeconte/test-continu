const assert = require('assert');
const Book = require('../src/books');

describe('Suppression de livre', () => {
    let book1
    beforeEach((done) => {
        book1 = new Book({title:'Stargate'});
        book1.save().then(() => {
            done();
        })
    });

    function assertDelete (promise, done) {
        promise.then( () => {
            Book.findOne({title:'Stargate'}).then((book) => {
                assert(book===null);
                done();
            })
        })
    }
    
    it('Supprimer un livre par son isntance', (done) => {
        assertDelete(book1.remove(), done);
    });

    it('Supprimer un livre par son modele', (done) => {
        assertDelete(Book.remove({title:'Stargate'}), done);
    });
    it('Supprimer un livre par son titre (findOneAndRemove) ', (done) => {
        assertDelete( Book.findOneAndRemove({ title:'Stargate'}), done);
    });
    it('Supprimer un livre par son ID (findByIdAndRemove) ', (done) => {
        assertDelete( Book.findByIdAndRemove( book1._id ), done);
    });
})