console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('Yargs:', argv);

if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(note === undefined) {
    console.log(`Note title already in use.`);
  } else {
    console.log(`Note created:`);
    console.log('--');
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`); 
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else if (command === 'read') {
  notes.getNote(argv.title);
} else {
  console.log('Command not recognized');
}
