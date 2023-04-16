// import Inquirer module using require()
const inquirer = require("inquirer");

// import File system module using require()
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Circle, Square } = require("./lib/shapes");


// Function writeToFile writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
    // File starts as an empty string
    let svgString = "";
    // Sets width and height of logo container
    svgString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
    svgString += "<g>";
    // Takes user input for shape choice and inserts it into SVG file
    svgString += `${answers.shape}`;

    // Conditional check takes users input from choices array and then adds polygon properties and shape color to SVG string
    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Circle") {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    }

    // <text> tag gives rise to text alignment, text-content/text-color taken in from user prompt and gives default font size of "40"
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    //Generate logo.svg file using writeFile() function and if error occur then its print error message.
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

// promptUser() function takes user inputs from command line using inquirer prompt() method 
function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message:
                    "What text would you like you logo to display? (Enter up to three characters)",
                name: "text",
            },
            {
                type: "input",
                message:
                    "Choose text color (Enter color keyword OR a hexadecimal number)",
                name: "textColor",
            },
            {
                type: "list",
                message: "What shape would you like the logo to render?",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape",
            },
            {
                type: "input",
                message:
                    "Choose shapes color (Enter color keyword OR a hexadecimal number)",
                name: "shapeBackgroundColor",
            },
        ])
        .then((answers) => {
            // if user enter more than 3 character in text prompt than its display console.log message and again call promptUser() function
            if (answers.text.length > 3) {
                console.log("Must enter a value of no more than 3 characters");
                promptUser();
            } else {

                //else it generate logo.svg file using writeTOFile() function
                writeToFile("logo.svg", answers);
            }
        });
}

// promptUser() function call 
promptUser();