const Employee = require('../lib/employee')
const Manager = require('../lib/manager')

test('', () => {
    
})

test('', () => {
    
})

test('', () => {
    
})

test('', () => {
    
})

test('', () => {
    
})

test('', () => {
    
})

test('getRole() should return \'Manager\'', () => {
    const testValue = 'Manager'
    const e = new Manager('Foo', 1, 'test@email.com', 1)
    expect(e.getRole()).toBe(testValue)
})

