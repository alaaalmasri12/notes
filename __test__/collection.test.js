'use strict';
const mongoose = require('mongoose');
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const Note = require('../lib/models/notes-collection');
const note = new Note();
// require('@code-fellows/supergoose');
describe('note Model', ()=> {
  it('can create() a new note item ', ()=> {
    let obj = {text: 'i am number one', catagory: 'motvaational'};
    return note.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  }) ;

  it('can get() a node item()', ()=> {
    let obj = {text: 'i am number one', catagory: 'motvaational'};
    return note.create(obj)
      .then(record => {
        return note.get(record.catagory)
          .then(NodeItem => {
            Object.keys(obj).forEach((key,index)=> {
              expect(obj[key]).toEqual(obj[key]);
            });
          });
      });

  });
});