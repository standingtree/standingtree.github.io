var utils  = require('greeting-test-exercises');
var greet = utils.load('./greeting.js');

describe('test greet()', () => {

    test('test single name', () => {
      expect(greet('Elizabeth')).toMatch('Hello, Elizabeth!');
    });

    test('test null name', () => {
      expect(greet()).toMatch('Hello there!');
    });

    test('test shouting', () => {
      expect(greet('JOSE')).toMatch('HELLO JOSE!');
    });

    test('test two name array', () => {
      expect(greet(['Jose', 'Pep'])).toMatch('Hello, Jose, Pep!');
    });

    test('test multi-name array', () => {
      expect(greet(['Jose', 'Pep', 'Alex', 'Sam'])).toMatch('Hello, Jose, Pep, Alex, Sam!');
    });

});
