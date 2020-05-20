const mongoose=require('mongoose');
const Notess=require('./models/notes-schema.js');
const MONGOSE_URI='mongodb://localhost:27017/notes';
mongoose.connect(MONGOSE_URI,{useNewUrlParser:true,useUnifiedTopology:true});

class Notes 
{
  constructor()
  {
    this.id=Math.ceil(Math.random()*10);
  }

  execute(obj)
  {
    // console.log('asdasda'.obj);
    if(obj.note)
    {
      return this.add(obj);

    }
    else if(obj.delete)
    {
      // console.log(obj);
      return this.delete(obj);
    }
    else if(obj.list)
    {
      return this.list(obj);
    }
  }
  async add(note)
  {
    // console.log(note);
    let notedetail={
      text:`${note.note}`,
      catagory:`${note.catagory}`,
    };

    let notes=new Notess(notedetail);
    // console.log(notes);
    await notes.save();
    console.log('note saved This is fun');
  }
  async delete(deletevalue)
  {
    let id=deletevalue.delete;
    let deleteItem = await Notess.findByIdAndDelete(id);
    console.log(`Deleted Note ${id}`);
  }
  async list(listvalue)
  {
    let list = await Notess.find({catagory:listvalue.catagory}); // select foods with apple name
    console.log('list',list);
  }

}
module.exports = Notes;
