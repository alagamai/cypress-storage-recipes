# Session storage, local storage, cookies storage testing using Cypress comammnds 

# Prerequisites

The first thing we need to do is to setup our environment. So here are some things that you should have to start this project:

VSCode: https://code.visualstudio.com/download </br>
NPM: https://www.npmjs.com/get-npm </br>
NodeJS: https://nodejs.org/en/download

# Steps to execute the test

1. Checkout the project from git
2. Navigate to the project root directory
3. To install all the project dependencies execute 
    npm i
4. To run the test execute
    npm run cy:session-test1 - to cache and restore session using cy.session  
    npm run cy:session-test2 - to cache and restore session using cy.session    
    npm run cy:before-load - to set cookie using onbeforeload java script event before the page loads 
    npm run cy:cookies-test1 - to get cookie token before all test and set cookie token before each test 
    npm run cy:cookies-test2 - to test cookies are set and cleared between test
    npm run cy:get-local-storage - to get and get all local storage keys
    npm run cy:save-restore-local-storage - to save and restore local storage data between test
