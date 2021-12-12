
// LEVEL 1

// Exercise 1

const getEmployee = async (id) => {
    const employees = require('./task4-data.json').employees;

    let employee = employees.find(employee => employee.id === id);
    if (!employee) {
        throw new Error('Employee not found');
    }
    return employee;
}

const getSalary = async (employee) => {
    const salaries = require('./task4-data.json').salaries;
    let salary = salaries.find(salary => salary.id === employee.id);
    if (!salary) {
        throw new Error('Salary not found');
    }
    return salary.salary;
}


// LEVEL 2
function dummyFunction() {
    
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
         resolve("I got invoked 2 seconds ago");
        }, 2000);
    });
}

async function callDummyFunction() {
    try {
        console.log(await dummyFunction());
    } catch (error) {
        console.log(`Error calling dummy function: ${error.message}`);
    }
}

module.exports = {
    getEmployee,
    getSalary,
    callDummyFunction
}