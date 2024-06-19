const inquirer = require("inquirer");
const fs = require("node:fs");
const {Triangle, Square, Circle} = require("./lib2/shapes2")
const {makeShape} = require("./lib/shapes");
const renderSvg = require("./lib2/createSvg");


// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
const questions = [
    {type: 'input',
     name: 'text',
     message: 'Please input the three letters used for your logo.'   
    },
    {type: 'input',
     name: 'textColor',
     message: 'Please input the text color. (accepts color keyword or hexadecimal)'   
    },
    {type: 'list',
     name: 'shape',
     message: 'Please select the shape you would like to use.',
     choices: ['Circle', 'Triangle', 'Square']
    },
    {type: 'input',
     name: 'shapeColor',
     message: 'Please input the shape color. (accepts color keyword or hexadecimal)'   
    }
    
]

//should run application using imports from lib
function writeToFile(data) {
    fs.writeFile('logo.svg', data, err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      });
    
}
function init () {
    inquirer
  .prompt(questions)
  .then((res) => {console.log(res)
    // console.log(makeShape(res))
    let shape = makeShape(res)
    writeToFile(shape)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

function init2 () {
  inquirer
.prompt(questions)
.then((res) => {
  switch(res.shape){
    case "Circle": 
      const circle = new Circle(res.text, res.textColor, res.shapeColor)
      return circle
    case "Square":
      return new Square(res.text, res.textColor, res.shapeColor)
    case "Triangle":
      return new Triangle(res.text, res.textColor, res.shapeColor)
  }
}).then((shape) =>{
  // console.log(shape)
  let renderedShape = renderSvg(shape)
  console.log(renderedShape)
   writeToFile(renderedShape)


})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});
}
init2()