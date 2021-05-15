const Employee = require('../lib/employee')
const Manager = require('../lib/manager')

describe("Manager", () => {
    it('Can set office number through constructor argument', () => {
        const testValue = 10
        const e = new Manager('Foo', 1, 'test@email.com', testValue)
        expect(e.officeNumber).toBe(testValue)
    })

    it('Can get office number from getOfficeNumber()', () => {
        const testValue = 10
        const e = new Manager('Foo', 1, 'test@email.com', testValue)
        expect(e.getOfficeNumber()).toBe(testValue)
    })

    it('getRole() should return \'Manager\'', () => {
        const testValue = 'Manager'
        const e = new Manager('Foo', 1, 'test@email.com', 1)
        expect(e.getRole()).toBe(testValue)
    })
})