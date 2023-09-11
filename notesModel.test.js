const NotesModel = require ('./notesModel')


describe('NotesModel', () => {
    
    it('when calling getNotes() method directly after initialising, should return empty array []', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    });

    it('after calling the addNote() method passing two strings, when we call getNotes() once more, these strings should be returned in an array', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    });

    it('after calling the reset() method on an instance of NotesModel that has two stored notes, and then calling getNotes(), it should return []', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        model.reset()
        expect(model.getNotes()).toEqual([])
    })
})