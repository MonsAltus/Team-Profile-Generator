const Employee = require('../lib/employee')

describe("Employee", () => {
    it('Can create Employee object.', () => {
        const e = new Employee()
        expect(typeof(e)).toBe('object')
    })

    it('Can set name through constructor argument', () => {
        const name = 'Albert'
        const e = new Employee(name)
        expect(e.name).toBe(name)
    })

    it('Can set id through constructor argument', () => {
        const testValue = 10
        const e = new Employee('Foo', testValue)
        expect(e.id).toBe(testValue)
    })

    it('Can set email through constructor argument', () => {
        const testValue = 'test@email.com'
        const e = new Employee('Foo', 1, testValue)
        expect(e.email).toBe(testValue)
    })

    it('Can get name from getName()', () => {
        const testValue = 'Albert'
        const e = new Employee(testValue)
        expect(e.getName()).toBe(testValue)
    })

    it('Can get id from getId()', () => {
        const testValue = 10
        const e = new Employee('Foo', testValue)
        expect(e.getId()).toBe(testValue)
    })

    it('Can get email from getEmail()', () => {
        const testValue = 'test@email.com'
        const e = new Employee('Foo', 1, testValue)
        expect(e.getEmail()).toBe(testValue)
    })

    it('getRole() should return \'Employee\'', () => {
        const testValue = 'Employee'
        const e = new Employee('Foo', 1, 'test@email.com')
        expect(e.getRole()).toBe(testValue)
    })
})