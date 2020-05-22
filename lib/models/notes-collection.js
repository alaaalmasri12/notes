const schema=require('../models/notes-schema');

class Collection
{
  constructor()
  {
        
  }
  async get(_id)
  {
    if(_id)
    {
      return await schema.findOne({_id: _id});
    }
    else
    {
      return await schema.find({});
    }
  }
  async create(note)
  {
    let NewNote=new schema(note);
    console.log('data has been added');
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