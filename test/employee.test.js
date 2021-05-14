const Employee = require('../lib/employee')

test('Can create Employee object.', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object')
})

test('Can set name through constructor argument', () => {
    const name = 'Albert'
    const e = new Employee(name)
    expect(e.name).toBe(name)
})

test('Can set id through constructor argument', () => {
    const testValue = 10
    const e = new Employee('Foo', testValue)
    expect(e.id).toBe(testValue)
})

test('Can set email through constructor argument', () => {
    const testValue = 'test@email.com'
    const e = new Employee('Foo', 1, testValue)
    expect(e.email).toBe(testValue)
})

test('Can get name from getName()', () => {
    const testValue = 'Albert'
    const e = new Employee(testValue)
    expect(e.getName()).toBe(testValue)
})

test('Can get id from getId()', () => {
    const testValue = 10
    const e = new Employee('Foo', testValue)
    expect(e.getId()).toBe(testValue)
})

test('Can get email from getEmail()', () => {
    const testValue = 'test@email.com'
    const e = new Employee('Foo', 1, testValue)
    expect(e.getEmail()).toBe(testValue)
})

test('getRole() should return \'Employee\'', () => {
    const testValue = 'Employee'
    const e = new Employee('Foo', 1, 'test@email.com')
    expect(e.getRole()).toBe(testValue)
})

test('', () => {
    
})

