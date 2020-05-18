'use strict';
const Input = require('../lib/input.js');
var faker = require('faker');
const minimist = require('minimist');
jest.mock('minimist');
minimist.mockImplementationOnce(() => ({
  a: 'this is my first test',
}),
);
var options = new Input();
describe('Input Module', ()=> {
    
  it('Given good input The Class valid() method returns true', ()=> {
      
    let randominput=faker.random.word();
    expect(options.valid(randominput)).toEqual(true);
  });
  it('Given bad input The Class valid() method returns false', ()=> {
      
    let randominput=faker.random.word();

    expect(options.valid(randominput)).toEqual(false);
  });

  it('The input module creates a new instance with both action and payload', ()=> {

    let randomaction=faker.random.words();
    let randompayload=faker.random.words();

    let newinstance={
      'action':randomaction,
      'payload':randompayload,
    };
    expect(newinstance).toEqual(newinstance);

  });
});
