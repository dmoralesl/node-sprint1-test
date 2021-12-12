
const personGenerator = require('../app/task2-level3');

test('personGenerator should has been called and have "Default" as initial value', () => {
    const generator = personGenerator('My name');
    expect(generator.next().value.name).toBe("Default");
    expect(generator.next().value.name).toBe("My name");
});