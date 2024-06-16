const inquirer = require("inquirer");
const fs = require("node:fs");
const Shape = require("./lib/shapes");


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
     choices: ['circle', 'triangle', 'square']
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
    let shape = new Shape(res)
    console.log(shape)
    writeToFile(shape.makeShape)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

init()