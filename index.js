const NotesModel = require('./notesModel')
const NotesView = require('./notesView')



// console.log('The notes app is running')
// console.log(model.getNotes())

model = new NotesModel()
view = new NotesView(model)
view.displayNotes();
