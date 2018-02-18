const assert = require('assert');
const Book = require('../src/books');

describe('Test validation', () => {
    it('Un titre est obligatoire', (done) => {
        const book1 = new Book({ title: undefined});
        const validationResult = book1.validateSync();
        const {message} = validationResult.errors.title;
        assert(message==='title empty, sav fail');
        done();
    })
    it('Un livre doit avoir moins de 3 000 pages', (done) => {
        const book1 = new Book({title: 'Les fleurs du mal', totalPages:3001});
        book1.validate( (validationResult) => {
            const {message} = validationResult.errors.totalPages;
            assert(message==='Un livre doit avoir moins de 3 000 pages');
            done();
        })
    })
})