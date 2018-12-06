## Pre-requisites
1. Install [Git](https://git-scm.com/downloads).
2. Install [Node.js](https://nodejs.org/en/download). LTS (long term support) version will suffice.

## Getting started
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

## Updating code and committing changes
1. Switch to the __master__ branch:
```
git checkout master
```
2. Ensure the __master__ branch is up-to-date with the latest changes:
```
git pull
```
3. Create a unique branch:
```
git checkout -b new-branch
```
4. Make your changes to the necessary file(s).
5. Commit your changes to the local repository with appropriate (or not) comments:
```
git add . && git commit -m "I'm Batman! The commit without parents :("
```
6. Push your changes from the new branch to the remote repository:
```
git push -f origin new-branch
```
7. Create a new __pull request__ (PR) to merge the changes from the new branch into the master branch:
```
https://github.com/temelm/training-eslint/pulls
```
8. __TO BE COMPLETED__

---

### :neckbeard:
