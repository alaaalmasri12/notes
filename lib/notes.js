const notes = {};

module.exports = notes;
function Notes()
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

module.exports = Notes;
