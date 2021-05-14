const Employee = require('../lib/employee')
const Engineer = require('../lib/engineer')

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

test('getRole() should return \'Engineer\'', () => {
    const testValue = 'Engineer'
    const e = new Engineer('Foo', 1, 'test@email.com', 1)
    expect(e.getRole()).toBe(testValue)
})