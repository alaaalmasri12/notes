'use strict';
const Notes = require('../lib/notes.js');
const Notess=require('../lib/models/notes-schema.js');
const Input = require('../lib/input.js');
const mongoose=require('mongoose');
const options = new Input();
const MONGOSE_URI='mongodb://localhost:27017/notes';
mongoose.connect(MONGOSE_URI,{useNewUrlParser:true,useUnifiedTopology:true});

const notes = new Notes();

jest.spyOn(global.console, 'log');
describe('node Mdule', ()=> {

  it('add() will add an object with an id', ()=> {
    expect(notes.add()).toEqual(Object);
  }); 
  it('delete() will delete an object with an id', ()=> {
    expect(notes.delete('5ec499cfe312ed339f2c6689')).toEqual(true);
  });            
});
