const { expect } = require('@jest/globals');
const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

// jest.mock('../lib/Engineer');
// constructor(name, id, email, role, officeNumber, github, school)

test('Creates new engineer object', () => {
    const engineer = new Engineer('Jeff', 0, "email", 'GitUsername');
    // console.log(engineer);

    expect(engineer.name).toBe('Jeff');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Jeff', 0, "email", 'GitUsername');

    expect(engineer.getName()).toBe('Jeff')
})

test('gets engineer id', () => {
    const engineer = new Engineer('Jeff', 0, "email", 'GitUsername');

    expect(engineer.getId()).toBe(0);
})

test('gets engineer email', () => {
    const engineer = new Engineer('Jeff', 0, "email", 'GitUsername');

    expect(engineer.getEmail()).toBe('email');
})

test('gets engineer github', () => {
    const engineer = new Engineer('Jeff', 0, "email", 'GitUsername');

    expect(engineer.getGithub()).toBe('GitUsername');
})
