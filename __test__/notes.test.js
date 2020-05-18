'use strict';
const Notes = require('../lib/notes.js');
const notes = new Node();
var faker = require('faker');
var randominput=faker.random.word();
jest.spyOn(global.console, 'log');
describe('node Mdule', ()=> {
  it('Nothing is logged to the console if there was no command given', ()=> {
        if(!randominput)
        {
            expect(console.log).not.toHaveBeenCalled();
        }

  });
});
