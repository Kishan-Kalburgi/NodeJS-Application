const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

var tiitleOption = {
    describe: 'title of note',
    demand: true,
    alias: 't'
}
var argv = yargs
        .command('add', 'Add a new note', {
            title: tiitleOption,
            body: {
                describe: 'body of note',
                demand: true,
                alias: 'b'
            }
        })
        .command('list', 'List all notes')
        .command('read', 'Read a note', {
            title :tiitleOption
        })
        .command('remove', 'Delete Above message', {
            title: tiitleOption
        })
        .help()
        .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note Created!');
        notes.logNote(note);
    } else {
        console.log('Title is taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var noteRead = notes.getNote(argv.title);
    if (noteRead) {
        console.log('Note Read!');
        notes.logNote(noteRead);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not not found');
}