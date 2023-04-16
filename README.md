# svg-logo-maker
Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

# Description
SVG logo maker application is node.js command line application that takes in user input to generate a logo and save it as an SVG file.This application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to .svg file.

In this application,User have to run this application in terminal and write node index.js then user have to answers questions like what text user wants on logo, text color, shape, background color of logo.in this text validation is enter up to 3 characters only in text.more than 3 characters are not allowed for logo text. also user have to select one shape from 3 options like triangle,circle,square.User can add hexadecimal value or color keyword for text and background color for logo.if user enter correct answers for all questions then "Generated logo.svg" message appear in terminal and logo.svg file is generated.to see the output of logo,right click on logo.svg file and in browser user can see logo of their choice like what they answers in terminal.

In this application, I used node.js inquirer method and using prompt I can take user inputs for logo.also I generate the logo.svg file using command line.In lib folder I save shapes.js file in which I create main shape class as parent class and 3 child classes triangle,circle,square which inherits properties of parent class.Also in this application I use jest framework for run my units test.for this I created shapes.test.js file in which for all 3 classes triangle,circle and square.so through this application I learn oop concepts like inheritance, jest framework, inquirer prompt method to collect inputs, create file using command line. So I increase my knowledge in oop and node.js.

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation
In this application I used nodejs, inquirer and jest. here are steps to user have to do before run the application.

1. node js version v16.2.0 using node -v user can see which version of node js is installed in system.

2. npm i -y , user can create package.json file with default values.

3. npm i inquirer@8.2.4 user can include inquirer module.

4. npm i jest , user can install jest.

5. In package json file , in script user have to change "test":"jest".

6. npm run test - to see test results for application.

7. node index.js - to run application.

# Usage

Must have terminal to use.
Here I attached some screenshots, links.


## Credits
N/A

## License
This project is using the MIT License.

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

