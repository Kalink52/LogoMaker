const {Triangle, Square, Circle} = require('./shapes2')

//testing suite for shape is created
describe ('Shape', () => {

    describe('Circle', () => {
        it('should match the size of the circle with user input', () => {

            let test = new Circle("txt", "red", 'blue')
            expect(test.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`)
        })
    })
    describe('Square', () => {
        it('should match the color of the circle with user input', () => {
            let test = new Square("txt", "red", "blue")
            expect(test.render()).toEqual(`<rect x="45" y="30" width="200" height="200" fill="blue" />`)
            
        })
    })
    describe('Triangle', () => {
        it('should match the color of the circle with user input', () => {
            let test = new Triangle("txt", "red", "blue")
            expect(test.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`)
            
        })
    })
})