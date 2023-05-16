/// <reference types="cypress" />

let token;

describe('template spec', () => {
	before(() => {
		cy.demoblazelogin();
		// cy.getCookies().then((cookies) => {
		//   token =  cookies[1].value
		// })
		cy.getCookiesUsingGetSet().then(tok_val => {
			token = tok_val;
			// cy.log(cookies[0].value);
		});
	});

	beforeEach(() => {
		cy.setCookie('tokenp_', token);
		cy.visit('https://demoblaze.com/');
	});

	it('test1', () => {
		cy.get('#nameofuser').should('contain', 'Welcome');
	});

	it('test2 ', () => {
		cy.get('#nameofuser').should('contain', 'Welcome');
	});
});
