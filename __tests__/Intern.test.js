const { expect } = require('@jest/globals');
const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');

// jest.mock('../lib/Intern');

test('Creates new intern object', () => {
    const intern = new Intern('Jeff', 0, "email", 'Intern', null, null, "School");
    // console.log(intern);

    expect(intern.name).toBe('Jeff');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Jeff', 0, "email", 'Intern', null, null, "School");

    expect(intern.getName()).toBe('Jeff')
})

test('gets intern id', () => {
    const intern = new Intern('Jeff', 0, "email", 'Intern', null, null, "School");

    expect(intern.getId()).toBe(0);
})

test('gets intern email', () => {
    const intern = new Intern('Jeff', 0, "email", 'Intern', null, null, "School");

    expect(intern.getEmail()).toBe('email');
})

test('gets intern role', () => {
    const intern = new Intern('Jeff', 0, "email", 'Intern', null, null, "School");

    expect(intern.getRole()).toBe('Intern');
})

test('gets intern school', () => {
    const intern = new Intern('Jeff', 0, "email", 'Intern', null, null, "School");

    expect(intern.getSchool()).toBe('School');
})
