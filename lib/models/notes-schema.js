'use strict';
const monogose=require('mongoose');
const notes= monogose.Schema({
  text:{type:String,required:true},
  catagory:{type:String,required:true},
});
module.exports=monogose.model('notes',notes);