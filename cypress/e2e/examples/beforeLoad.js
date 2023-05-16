/// <reference types="cypress" />

let token;

describe('template spec', () => {
	before(() => {
		cy.demoblazelogin();
		cy.getCookiesUsingGetSet().then(tok_val => {
			token = tok_val;
		});
	});

	it('test1', () => {
		cy.visit('https://demoblaze.com/', {
			onBeforeLoad(win) {
				win.document.cookie = `tokenp_=${token}; domain=.demoblaze.com; path=/`;
			},
		});
		cy.get('#nameofuser').should('contain', 'Welcome');
	});

	it('test2 ', () => {
		cy.visit('https://demoblaze.com/', {
			onBeforeLoad(win) {
				//option + tilda above tab key
				win.document.cookie = `tokenp_=${token}`;
			},
		});
		cy.get('#nameofuser').should('contain', 'Welcome');
	});
});
