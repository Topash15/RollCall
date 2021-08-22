// const { expect } = require('@jest/globals');
const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

// jest.mock('../lib/Manager');

test('Creates new manager object', () => {
    const manager = new Manager('Jeff', 0, "email", 'Manager', 10, null, null);
    // console.log(manager);

    expect(manager.name).toBe('Jeff');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager name', () => {
    const manager = new Manager('Jeff', 0, "email", 'Manager', 10, null, null);

    expect(manager.getName()).toBe('Jeff')
})

test('gets manager id', () => {
    const manager = new Manager('Jeff', 0, "email", 'Manager', 10, null, null);

    expect(manager.getId()).toBe(0);
})

test('gets manager email', () => {
    const manager = new Manager('Jeff', 0, "email", 'Manager', 10, null, null);

    expect(manager.getEmail()).toBe('email');
})

test('gets manager role', () => {
    const manager = new Manager('Jeff', 0, "email", 'Manager', 10, null, null);

    expect(manager.getRole()).toBe('Manager');
})

test('gets manager office number', () => {
    const manager = new Manager('Jeff', 0, "email", 'Manager', 10, null, null);

    expect(manager.getOfficeNumber()).toBe(10);
})