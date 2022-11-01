_describe and it titling conventions_
=====================================

Let's talk about naming your test suites and individual test in a beautiful manner.

* * *

Sample Code
-----------

    const greeting = guest => \`Hello, ${guest}!\`;
    describe('greeting()', () => {
        it('says hello', () => {
            expect(greeting('Al').toBe('Hello, Al'));
        });
    });

1.  Your test suite, **'greeting()'** should be a noun.
2.  Your individual test, **'says hello'** should write out a verb taking place.

That way when read together, states _'greeting() says hello'_ making output super easy to read.

* * *

When to Source Control?
-----------------------

Once you have finished a component that passes all your test using the Test Driven Methodology, commit.