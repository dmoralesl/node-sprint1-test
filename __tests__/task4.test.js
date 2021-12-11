const { getEmployee, getSalary, callDummyFunction } = require('../app/task4');

test('getEmployee return an employee when passing a valid ID and fails with non valid ID', () => {
    getEmployee(2).then(employee => expect(employee.name) === 'Bill Gates');
    getEmployee(10).catch(error => expect(error === 'Employee not found'))
});

test('getSalary return salary when passing a valid ID and fails with non valid ID', () => {
    getSalary({id: 2, name: 'Bill Gates'}).then(salary => expect(typeof salary) === 'number');
    getSalary({id: 2, name: 'Bill Gates'}).then(salary => expect(salary) === 1000);
    getSalary({id: 99, name: 'Bill Gates'}).catch(error => expect(error === 'Salary not found'))
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