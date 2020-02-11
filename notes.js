const fs = require('fs')

const notesDB = './notes.json'
const notes = {}

notes.addNote = (noteTitle, noteBody) => {
    const allNotes = getNotes()
    const newNote = {
        title: noteTitle, 
        body: noteBody
    }
    allNotes.notes.push(newNote)
    return saveNotes(allNotes)
}

notes.removeNote = (title) => {
    const allNotes = getNotes()
    allNotes.notes = allNotes.notes
        .filter(note => note.title !== title)
    return saveNotes(allNotes)
}

notes.listNotes = () => {
    return getNotes().notes
        .map(note => note.title)
}

notes.readNote = (title) => {
    return getNotes().notes
        .find(note => title === note.title)
}

const getNotes = () =>  {
    const notesBuffer = fs.readFileSync(notesDB)
    return JSON.parse(notesBuffer.toString())
}

const saveNotes = (allNotes) => {
    return fs.writeFileSync(notesDB, JSON.stringify(allNotes))
}

module.exports = notes