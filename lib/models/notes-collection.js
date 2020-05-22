const schema=require('../models/notes-schema');

class Collection
{
  constructor()
  {
        
  }
  async get(catagory)
  {
    if(catagory)
    {
      return await schema.find({catagory: catagory});
    }
    else
    {
      return await schema.find({});
    }
  }
  async create(note)
  {
    let NewNote=new schema(note);
    return await NewNote.save();
  }



  async update(_id, record) {
    return await schema.findByIdAndUpdate(_id, record);
  }
  async delete(_id) {
    await schema.findByIdAndDelete(_id);
  }
  async list(record)
  {
     
    console.log(record);
    let list = await schema.find({catagory:record.catagory});  
    console.log('result',list);
  }
}
module.exports=Collection;