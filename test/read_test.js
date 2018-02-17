const assert = require('assert');
const Book = require('../src/books');

describe('Lecture de livre', () => {
    let book1
    beforeEach((done) => {
        book1 = new Book({title:'Harry Potter'});
        book1.save().then(() => {
            done();
        })
    });
    
    it('Recherche de livre par son titre', (done) => {
        Book.find({title:'Harry Potter'}).then((instances) => {
            assert(instances[0]._id.equals(book1._id));
            done();
        })
    });

    it('Recherche de livre par son id', (done) => {
        Book.findOne({_id: book1._id}).then((instance) => {
            assert(instance.title === book1.title);
            done();
        })
    });
})