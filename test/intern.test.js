const Employee = require('../lib/employee')
const Intern = require('../lib/intern')

test('Can set school through constructor argument', () => {
    const testValue = 10
    const e = new Intern('Foo', 1, 'test@email.com', testValue)
    expect(e.school).toBe(testValue)
})

test('Can get school from getSchool()', () => {
    const testValue = 10
    const e = new Intern('Foo', 1, 'test@email.com', testValue)
    expect(e.getSchool()).toBe(testValue)
})

test('getRole() should return \'Intern\'', () => {
    const testValue = 'Intern'
    const e = new Intern('Foo', 1, 'test@email.com', 1)
    expect(e.getRole()).toBe(testValue)
})