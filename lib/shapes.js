


function switchShape (shape) {
    switch (shape) {
        case "Circle":
            return '<circle cx="150" cy="100" r="80"'
        case "Square":
            return '<rect x="45" y="30" width="200" height="200"'
        case "Triangle":
            return '<polygon points="150, 18 244, 182 56, 182"'
    }
}



function makeShape(data) {

let shape = switchShape(data.shape)



    return ` 
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

${shape} fill="${data.shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
</svg>
    
    `
}







module.exports = {makeShape, switchShape}