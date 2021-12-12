// LEVEL 2

const Person = require("../app/task2");

jest.mock("../app/task2");

beforeEach(() => {
    Person.mockClear();
});


test('constructor should has been called once', () => {
    const person = new Person();
    expect(Person).toHaveBeenCalledTimes(1);
});

test('sayName should has been called once', () => {
    const person = new Person();
    person.sayName("David");
    expect(person.sayName).toHaveBeenCalledTimes(1);
});

