const Employee = require('../lib/employee')
const Manager = require('../lib/manager')

test('Can set office number through constructor argument', () => {
    const testValue = 10
    const e = new Manager('Foo', 1, 'test@email.com', testValue)
    expect(e.officeNumber).toBe(testValue)
})

test('Can get office number from getOfficeNumber()', () => {
    const testValue = 10
    const e = new Manager('Foo', 1, 'test@email.com', testValue)
    expect(e.getOfficeNumber()).toBe(testValue)
})

test('getRole() should return \'Manager\'', () => {
    const testValue = 'Manager'
    const e = new Manager('Foo', 1, 'test@email.com', 1)
    expect(e.getRole()).toBe(testValue)
})

