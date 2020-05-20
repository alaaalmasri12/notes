
class Notes 
{
  this.id=Math.ceil(Math.random()*10);
}
Notes.prototype.execute=function(obj)
{
  if(obj.action ==='add')
  {
    this.add(obj);
  }
};
Notes.prototype.add=function(note)
{
  let objs=
    {
      [this.id]:note,
    };
  console.log(objs);
  console.log(note.payload);
};
<<<<<<< HEAD
//
=======

  constructor()
  {
    this.id=Math.ceil(Math.random()*10);
  }
  execute(obj)
  {
    if(obj.action ==='add')
    {
      this.add(obj);
    }
  }
  add(note)
  {
      if(note)
      {
        let objs=
    {
      [this.id]:note,
    };
    console.log(objs);
    console.log(note.payload);  
      }
    }
    
  }
>>>>>>> f5d873ae03fa19ec11843a066b1591f2cf9f4b3a
module.exports = Notes;
