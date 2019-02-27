console.log('Started notes.js');

var addNote = (title, body) => {
    console.log(`Adding note ${title} ${body}`);
};

var getAll = () => {
    console.log('Listing all notes');
};

var getNote = (title) => {
    console.log(`Getting note with title ${title}`);
};

var removeNote = (title) => {
    console.log(`Note ${title} removed`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}