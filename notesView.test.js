
/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require("./notesModel")
const NotesView = require("./notesView")

describe('notesView', () => {
    it(`displayNotes method returns empty list of notes from model`, () => {
        model = new NotesModel();
        view = new NotesView(model);
        expect(view.displayNotes()).toEqual([]);
    })

    it('displays two notes', () => {
        //Set up the model and view classes
        document.body.innerHTML = fs.readFileSync('./index.html');
        model = new NotesModel()
        model.addNote('Note 1')
        model.addNote('Note 2')
        view = new NotesView(model)

        //Display notes on page
        view.displayNotes();

        //Assert that there are two div.note elements on page
        expect(document.querySelectorAll('div.note').length).toEqual(2);


    })

    it('clicks the button and displays the new note', () => {
        //Arrange
        document.body.innerHTML = fs.readFileSync('./index.html')
        model = new NotesModel()
        view = new NotesView(model)
        
        //Act 
        const inputEl = document.querySelector('#task-input-box')
        const btnEl = document.querySelector('#add-note-btn')
        inputEl.value = 'Here is an example to do task'
        btnEl.click()

        //Assert 
        expect(document.querySelector('div.note').length).toEqual(1)
        expect(document.querySelector('div.note')[0].textContent).toEqual('Here is an example to do task')

    });
})

