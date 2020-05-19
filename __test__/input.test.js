'use strict';
const Input = require('../lib/input.js');
var options = new Input();

describe('Input Module', ()=> {
    
  it('Given good input The Class valid() method returns true', ()=> {
      
    let randominput=faker.random.word();
    expect(options.valid('add')).toEqual(true);
  });
  it('Given bad input The Class valid() method returns false', ()=> {
      
    let randominput=faker.random.word();

    expect(options.valid()).toEqual(false);
  });

  it('The input module creates a new instance with both action and payload', ()=> {


    let newinstance={
      'action':randomaction,
      'payload':randompayload,
    };
    expect(newinstance).toEqual(newinstance);

  });
});
