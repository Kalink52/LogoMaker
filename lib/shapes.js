class Shape {
    constructor(text, textColor, shape, shapeColor, ) {
        this.text = text,
        this.textColor = textColor,
        this.shape = shape,
        this.shape = shapeColor
    }



    makeShape(data) {
    return ` 
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="blue" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">SVG</text>
</svg>
    
    `
}
}







module.exports = Shape.makeShape