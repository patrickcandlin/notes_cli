const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: String
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: String
        }
    },
    handler(argv){
        const { title, body } = argv
        console.log(`Adding note:`)
        console.log(`Title: ${title}`)
        console.log(`Body: ${body}`)
        return notes.addNote(title, body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Removing noted',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: String
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'List out all notes',
    handler(){
        notes.listNotes().map((title, index) => {
            console.log(`${index + 1}: ${title}`)
        })
    }
})
yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: String 
        }
    },
    handler(argv){
        const note = notes.readNote(argv.title)
        note 
            ? console.log(note.body) 
            : console.log('Could not locate a note by that title.')
    }
})
yargs.parse()