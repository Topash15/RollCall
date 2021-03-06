const { expect } = require('@jest/globals');
const { test } = require('@jest/globals');
const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee');
// constructor(name, id, email, role, officeNumber, github, school)


test('Creates new employee object', () => {
    const employee = new Employee('Jeff', 0, "email");
    // console.log(employee);

    expect(employee.name).toBe('Jeff');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Jeff', 0, "email");

    expect(employee.getName()).toBe('Jeff')
})

test('gets employee id', () => {
    const employee = new Employee('Jeff', 0, "email");

    expect(employee.getId()).toBe(0);
})

test('gets employee email', () => {
    const employee = new Employee('Jeff', 0, "email");

    expect(employee.getEmail()).toBe('email');
})