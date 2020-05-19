'use strict';
const Notes = require('../lib/notes.js');
const notes = new Notes();

jest.spyOn(global.console, 'log');
describe('node Mdule', ()=> {

  it(' does nothing with invalid opts', ()=> {
    notes.add();
    expect(console.log).not.toHaveBeenCalled();
  });
  
  it('will log out opts when given', ()=> {
    notes.add({url: 'foo'});
    expect(console.log).toHaveBeenCalled();
  });        
});
