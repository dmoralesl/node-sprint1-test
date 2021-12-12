const { getEmployee, getSalary, callDummyFunction, getFullEmployeeInfo } = require('../app/task4');

test('getEmployee return an employee when passing a valid ID', () => {
    getEmployee(2).then(employee => expect(employee.name).toBe('Bill Gates'));
});

test('getSalary return salary when passing a valid ID', () => {
    getSalary({id: 2, name: 'Bill Gates'}).then(salary => expect(typeof salary).toBe('number'));
    getSalary({id: 2, name: 'Bill Gates'}).then(salary => expect(salary).toBe(1000));
});

test('callDummyFunction waits 2 seconds until ends execution', () => {
    const start = Date.now();
    callDummyFunction().then(() => {
        expect(Date.now() - start).toBeGreaterThanOrEqual(2000);
    });
});

test('call getSalary inside getEmployee promise resolve and get salary', () => {
    getEmployee(2).then(employee => {
        getSalary(employee).then(salary => {
            expect(salary).toBe(1000);
        });
    });
});


jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');


test('callDummyFunction execution but using fake timers', () => {
    callDummyFunction();
    expect(setTimeout).toHaveBeenCalledTimes(2); // 2 calls because we run callDummyFunction in two different test
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });

// LEVEL 3
// There are no option with current code in getSalary and getEmployee function to make 
// them thrown an error not controled and different of type Error.
test('getEmployee throw error when passing an invalid ID and type of error should be basic "Error"', () => {
    getEmployee(10).catch(error => expect(error.message).toBe('Employee not found'));
    getEmployee(10).catch(error => expect(error.name).toBe('Error'));
});

test('getSalary throw error when passing an invalid ID and type of error should be basic "Error"', () => {
    getSalary({id: 99, name: 'Bill Gates'}).catch(error => expect(error.message).toBe('Salary not found'));
    getSalary({id: 99, name: 'Bill Gates'}).catch(error => expect(error.name).toBe('Error'));
});

// callDummyFunction cannot be forced to error because not parameters are passed and has not external dependencies.

// getFullEmployeeInfo function does not raise errors because has catch clause but in that catch returns a null value.
// So we can test that returns null to check that is failing
test('getFullEmployeeInfo should return undefined (void return) when passing an invalid ID', () => {
    getFullEmployeeInfo(10).then(employee => expect(employee).toBe(undefined));
});