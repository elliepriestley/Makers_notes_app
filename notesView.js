const NotesModel = require('./notesModel')


class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');
        
        document.querySelector('#add-note-btn').addEventListener('click', () => {
            const newNote = document.querySelector('#task-input-box').value;
            this.addNewNote(newNote)
        })
        
    }

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes()

    }

    displayNotes() {
        document.querySelectorAll('.note').forEach(element => {
            element.remove()
        });


        const notes = this.model.getNotes()
        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl)
        })

        document.querySelector('#task-input-box').value = ""
}
}



module.exports = NotesView;