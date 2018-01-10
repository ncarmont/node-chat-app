const expect = require('expect');
const {isRealString} = require('./validation');


//is Real string
describe('isRealString',() =>{

it('should reject non-string values',()=> {
var number = 5;
var res = isRealString(number);

expect(res).toBe(false);
})

it('should reject only space', ()=> {
  var spaces ='     ';
  var res = isRealString(spaces);

  expect(res).toBe(false);
})

it('should allow string with non-space charset', ()=> {

var validString = 'Hello yo yo';
var res = isRealString(validString);

expect(res).toBe(true);
})
});
