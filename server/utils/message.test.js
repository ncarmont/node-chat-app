const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');



describe('generateMessage', () =>{
it ('should generate correct message object', ()=>{

var from = 'Jen';
var text = 'Some message';
var message = generateMessage(from,text);

expect(typeof(message.createdAt)).toBe('number');
expect(message).toInclude({from, text})
})
})

describe('generateLocationMessage',()=>{
  it('should generate correct location object',()=>{

var from = 'Jen';
var latitude = 12345;
var longitude = 12345;
var url = `https://www.google.com/maps?q=${latitude},${longitude}`
var message = generateLocationMessage(from,latitude,longitude);

expect(message.from).toBe(from);
expect(message.url).toBe(url);
expect(typeof(message.createdAt)).toBe('number');
  })
})
