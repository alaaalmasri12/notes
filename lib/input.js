const minimist = require('minimist');
function Input() {
  const args = minimist(process.argv.slice(2)); // command line args
  this.note= args.a ||args.add;
}

Input.prototype.getkeys =function() {
  if(this.note ==undefined)
  {
    throw 'Error:you should use -a or -add';
  }
  if(this.note ===true)
  {
    throw 'Add a message here';
  }
  
  var obj = {
    action:`add`,
    payload:`ADDING  notes  ${this.note}`,
  };
  return obj;
};
module.exports = Input;