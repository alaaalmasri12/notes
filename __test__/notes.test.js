'use strict';
const Notes = require('../lib/notes.js');
const mongoose=require('mongoose');
const MONGOSE_URI='mongodb://localhost:27017/notes';
mongoose.connect(MONGOSE_URI,{useNewUrlParser:true,useUnifiedTopology:true});

const notes = new Notes();

jest.spyOn(global.console, 'log');
describe('node Mdule', ()=> {

  it('add() will add an object with an id', ()=> {
    let object={note:'add', catagory:'javascript'};
    notes.add(object).
      then(()=>{
        expect(console.log).toHaveBeenCalled();

      });
  }); 
  it('delete() will delete an object with an id', ()=> {
    let object={note:'add', catagory:'javascript'};
    notes.delete(object).
      then(()=>{
        expect(console.log).toHaveBeenCalled();

      });

  }); 
  it('list() will  display all the lists', ()=> {
    let object={note:'alaa', catagory:'anime'};
    notes.list(object).
      then(()=>{
        expect(console.log).toHaveBeenCalled();
      });
  });
 
});    
           
