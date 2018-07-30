let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');
describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Elad';
    let text = 'Some message';
    let message = generateMessage(from,text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Admin';
    let lat = 15;
    let lng = 19;
    let url = `https://www.google.com/maps?q=${lat},${lng}`;
    let message = generateLocationMessage(from,lat,lng);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});