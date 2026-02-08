Create a private repository in your organization from the Project Two template
The following steps will be needed for all future projects.  The steps are listed here once.
You need to have Node.js installed on your system to run the code quality checker
Fetch the code quality tool, ESLint, by running npm install at the CLI of your project directory.  This will fetch ESLint into the node_modules subdirectory.
Run ESLint on all the JavaScript files in your project by running npm run lint at the CLI of your project directory.  Every JavaScript file you submit should start with 'use strict'; and running ESLint will report on any errors or warnings.
This project contains the files test-project2.html and test-project2.js that act as a testing framework for your code and provide two ways to test your assignment:
Open the file test-project2.html in your browser. The web page will load the JavaScript code you have written and run a few tests.
Run npm test at the CLI of your project directory
This and future projects contain a .gitignore file.  You can use this file to ensure the exclusion of files and folders that you do not want in your repository (i.e. node_modules folder, compiled folder, etc).
