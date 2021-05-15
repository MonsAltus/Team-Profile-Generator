const Employee = require('../lib/employee')
const Intern = require('../lib/intern')

describe("Intern", () => {
    it('Can set school through constructor argument', () => {
        const testValue = 'UCSD'
        const e = new Intern('Foo', 1, 'test@email.com', testValue)
        expect(e.school).toBe(testValue)
    })

    it('Can get school from getSchool()', () => {
        const testValue = 'UCSD'
        const e = new Intern('Foo', 1, 'test@email.com', testValue)
        expect(e.getSchool()).toBe(testValue)
    })

    it('getRole() should return \'Intern\'', () => {
        const testValue = 'Intern'
        const e = new Intern('Foo', 1, 'test@email.com', 1)
        expect(e.getRole()).toBe(testValue)
    })
})