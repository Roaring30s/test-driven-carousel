const fizzBuzz = require('../index');

describe('fizzBuzz()', () => {
    it('returns "FizzBuzz" for multiples of 3 and 5', () => {
        // Setup
        const expected = 'FizzBuzz';

        // Execution 
        const fizz15 = fizzBuzz(15);
        const fizz30 = fizzBuzz(30);

        // Verification
        expect(fizz15).toBe(expected);
        expect(fizz30).toBe(expected);
    });
    it(' returns the multiples for the given numbers that are not 3 or 5', () => {
        //Setup
        const expected = 'FizzBuzz';

        //Execution
        const fizz1 = fizzBuzz(1);
        const fizz22 = fizzBuzz(22);

        expect(fizz1).toBe('1');
        expect(fizz22).toBe('22');
    });
});