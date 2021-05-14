const Employee = require('../lib/employee')
const Engineer = require('../lib/engineer')

test('Can set Github through constructor argument', () => {
    const testValue = 'testUsername'
    const e = new Engineer('Foo', 1, 'test@email.com', testValue)
    expect(e.github).toBe(testValue)
})

test('Can get Github from getGithub()', () => {
    const testValue = 'testUsername'
    const e = new Engineer('Foo', 1, 'test@email.com', testValue)
    expect(e.getGithub()).toBe(testValue)
})

test('getRole() should return \'Engineer\'', () => {
    const testValue = 'Engineer'
    const e = new Engineer('Foo', 1, 'test@email.com', 1)
    expect(e.getRole()).toBe(testValue)
})