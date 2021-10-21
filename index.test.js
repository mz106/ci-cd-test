
const { returnTen } = require('./index.js')


describe("testinf returnTen", () => {
    it('should return 10', () => {
        const result = returnTen(5)
        expect(result).toBe(10)
    })
})
