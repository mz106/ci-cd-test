
const { returnTen, returnStringNum } = require('./index.js')

describe('testinf returnTen', () => {
  it('should return 10', () => {
    const result = returnTen(5)
    expect(result).toBe(10)
  })
})

describe('testing returnStringNum', () => {
    it('should return Hi, I am 38 years old', () => {
        const result = returnStringNum(38)
        expect(result).toBe('Hi, I am 38 years old.')
    })
})
