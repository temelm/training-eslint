## Pre-requisites
1. Install [Git](https://git-scm.com/downloads).
2. Install [Node.js](https://nodejs.org/en/download). LTS (long term support) version will suffice.

## Getting Started
1. Clone repository:
```
git clone https://github.com/temelm/training-eslint.git
```
2. Install project dependencies:
```
npm install
```
Following __devDependencies__ (`npm install --save-dev`) will be installed:
* [eslint](https://www.npmjs.com/package/eslint)
* [husky](https://www.npmjs.com/package/husky)

## Configuration
* __.eslintrc.json__ file contains ESLint rules.
* __.gitattributes__ file is used for normalising line endings.
* __.huskyrc.json__ file is a Git hook which ensures all code passes linting before any commits to the repository can be made.
