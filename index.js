#!/usr/bin/env node
'use strict';
const Input = require('./lib/input.js');
const notes =  require('./lib/notes.js');
const mongoose=require('mongoose');
const options = new Input();
// console.log(options);
let Notes=new notes();
let object=options.getkeys();
// console.log('options data',options);
// console.log('obj arg',options.note);
options.valid(options);
// console.log('asdsadaj',options.delete);
Notes.execute(options)
  .then(mongoose.disconnect);
  


