const { expect } = require('@jest/globals');
const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('Creates new manager object', () => {
    const manager = new Manager('Jeff', 0, "email", 10)
    // console.log(manager);

    expect(manager.name).toBe('Jeff');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager name', () => {
    const manager = new Manager('Jeff', 0, "email", 10)

    expect(manager.getName()).toBe('Jeff')
})

test('gets manager id', () => {
    const manager = new Manager('Jeff', 0, "email", 10)

    expect(manager.getId()).toBe(0);
})

test('gets manager email', () => {
    const manager = new Manager('Jeff', 0, "email", 10)

    expect(manager.getEmail()).toBe('email');
})

test('gets manager office number', () => {
    const manager = new Manager('Jeff', 0, "email", 10)

    expect(manager.getOfficeNumber()).toBe(10);
})