const {switchShape} = require('./shapes')

//testing suite for shape is created
describe ('Shape', () => {

    describe('Circle', () => {
        it('should match the size of the circle with user input', () => {

            let test = switchShape('Circle')
            expect(test).toEqual(`<circle cx="150" cy="100" r="80"`)
        })
    })
    describe('Square', () => {
        it('should match the color of the circle with user input', () => {
            let test = switchShape('Square')
            expect(test).toEqual(`<rect x="45" y="30" width="200" height="200"`)
            
        })
    })
    describe('Triangle', () => {
        it('should match the color of the circle with user input', () => {
            let test = switchShape('Triangle')
            expect(test).toEqual(`<polygon points="150, 18 244, 182 56, 182"`)
            
        })
    })



})