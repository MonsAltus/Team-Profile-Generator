const Employee = require('../lib/employee')
const Intern = require('../lib/intern')

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

test('getRole() should return \'Intern\'', () => {
    const testValue = 'Intern'
    const e = new Intern('Foo', 1, 'test@email.com', 1)
    expect(e.getRole()).toBe(testValue)
})