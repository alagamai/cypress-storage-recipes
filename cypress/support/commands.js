// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-localstorage-commands';

Cypress.Commands.add('login', () => {
	let username = 'demouser';
	let password = 'testingisfun99';
	cy.visit('https://bstackdemo.com/signin');

	// cy.request('GET', 'https://bstackdemo.com/signin',
	// {userName: "demouser", password: "testingisfun99"}
	// ).then(resp => {

	// })

	// cy.getLocalStorage('username').then(name => {
	//     username = name;
	//     cy.get('#username').type(username+'{enter}')
	// })
	// cy.getLocalStorage('password').then(pwd => {
	//     password = pwd;
	//     cy.get('#password').type(password+'{enter}')

	// })
	cy.get('#username').type(username + '{enter}');
	cy.get('#password').type(password + '{enter}');

	cy.get('#login-btn').click();
	cy.url().should('eq', 'https://bstackdemo.com/?signin=true');
	// cy.saveLocalS    torage()
	// cy.window().then((win) => {
	//     // set a value in sessionStorage
	//     win.sessionStorage.setItem('username', 'demouser' )
	//   })
});

Cypress.Commands.add('demoblazelogin', () => {
	cy.visit('https://demoblaze.com/');
	cy.get('#login2').click();
	cy.wait(2000);
	cy.get('#loginusername').type('demo1@yopmail.com');
	cy.wait(2000);
	cy.get('#loginpassword').type('Pass@123');
	cy.get(
		'#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
	).click();
	cy.wait(2000);
});

Cypress.Commands.add('loginUsingSession', (username, pwd) => {
	cy.session(username, () => {
		cy.visit('https://demoblaze.com/');
		cy.wait(2000);
		cy.get('#login2').click();
		cy.wait(2000);
		cy.get('#loginusername').type(username);
		cy.wait(2000);
		cy.get('#loginpassword').type(pwd);
		cy.get(
			'#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
		).click();
		cy.wait(2000);
	});
});

Cypress.Commands.add('LoginWithPageSession', (uName, pwd) => {
	cy.session(uName, () => {
		cy.visit('https://react-redux.realworld.io/');
		cy.contains('Sign in').click();
		cy.get("input[placeholder = 'Email']").type(uName);
		cy.get("input[placeholder = 'Password']").type(pwd);
		cy.get("button[type='submit']").click();
		cy.get('ul.nav.navbar-nav.pull-xs-right > li:nth-child(2)').should(
			'contain',
			'New Post'
		);
	});
});

Cypress.Commands.add('getCookiesUsingGetSet', () => {
	// return cy.getCookies()
	return cy.getCookies().then(cookies => {
		// cy.log(`The value of 'user' is: ${cookies[0].value}`);
		cy.log(`The value of 'tokenp_' is: ${cookies[1].value}`);
		// cy.task('setCookieUser', cookies[0].value )
		// cy.task('setCookieToken', cookies[1].value)
		cy.wrap(cookies[1].value);
	});
});
