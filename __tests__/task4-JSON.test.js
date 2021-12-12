const { getEmployee, getSalary, callDummyFunction } = require('../app/task4-JSON');

// Original "Bill Gates" name changed to "Bill Mates" to test mock is working
jest.mock('../app/task4-data.json', ()=>({
    employees : [{
        id: 1,
        name: 'Linux Torvalds'
    }, {
        id: 2,
        name: 'Bill Mates'
    },{
        id: 3,
        name: 'Jeff Bezos'
    }],
     
    salaries : [{
        id: 1,
        salary: 4000
    }, {
        id: 2,
        salary: 1000
    }, {
        id: 3,
        salary: 2000
    }]
  }))



test('getEmployee return an employee when passing a valid ID and fails with non valid ID', () => {
    getEmployee(2).then(employee => expect(employee.name).toBe('Bill Mates'));
    getEmployee(10).catch(error => expect(error.message).toBe('Employee not found'));
});

test('getSalary return salary when passing a valid ID and fails with non valid ID', () => {
    getSalary({id: 2, name: 'Bill Gates'}).then(salary => expect(typeof salary).toBe('number'));
    getSalary({id: 2, name: 'Bill Gates'}).then(salary => expect(salary).toBe(1000));
    getSalary({id: 99, name: 'Bill Gates'}).catch(error => expect(error.message).toBe('Salary not found'));
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