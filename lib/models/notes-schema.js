'use strict';
const monogose=require('mongoose');
const notes= monogose.Schema({
  text:{type:'string',required:true},
  catagory:{type:'string',required:true},
});
module.exports=monogose.model('notes',notes);