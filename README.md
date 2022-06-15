# typescript-readme-generator
This is my readme generator I made, but re-implemented in typescript, I'm doing 
this as a way to learn!

## Description
This is a very simple readme file generator I made based off of an old project
where I did the same thing. https://github.com/jvbridge/readme-generator

This one differes in that I made it in typescript! 

## Installation

This program requires an installation of [Node.js](https://nodejs.org/) to work

Download the repository and run `npm install` in the root direcotry. After the
packages have been installed you should be ready to go.

## Usage

After installation run `npm start` and the program will then begin to build 
itself, before running. Alternatively if you already have a build you may run 
`node build/index.js` in order to skip the building process. 

After the build is complete the program will ask you a series of questions to
build a markdown file. 

When it finishes it will output a file in `build/output/{filename}.md`

## Development envirnoment

Further development is possible, to open the development environment run 
`npm run start:dev` in order to start nodemon, based on the configuration. 
After that you may edit the typescript files in the `src` directory.

## Contributing
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

CLI package used is inquierer: https://www.npmjs.com/package/inquirer

Technology badges found at:
https://github.com/alexandresanlim/Badges4-README.md-Profile

License badges found at: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)