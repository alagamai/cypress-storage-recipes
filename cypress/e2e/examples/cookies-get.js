/// <reference types="cypress" />

describe('session test', () => {
	beforeEach(() => {
		cy.visit('cypress/html/storage.html');
		Cypress.Cookies.debug(true);
	});

	it('tests that the cookie is set', () => {
		cy.get('[data-cy=cookie-trigger]').click();

		cy.getCookie('key1')
			.should('be.a', 'object')
			.should('have.property', 'value');
	});

	it('tests that the cookie is cleared', () => {
		cy.getCookies().should('be.empty');
	});

	it('sets the cookie again and preserves it', () => {
		cy.get('[data-cy=cookie-trigger]').click();

		cy.getCookie('key1').should('have.property', 'value', 'value1');

		// Cypress.Cookies.preserveOnce("key1");
	});

	it('tests that the cookie is cleared', () => {
		cy.getCookies().should('be.empty');
	});

	it('sets the cookie again and preserves it', () => {
		cy.get('[data-cy=cookie-trigger]').click();

		cy.getCookie('key1').should('have.property', 'value', 'value1');

		//Cypress.Cookies.preserveOnce('key1');
	});

	// it('tests that the cookie was preserved', () => {
	// 	cy.getCookie('key1').should('have.property', 'value', 'value1');
	// });

	it('tests that the cookie was not preserved across test', () => {
		cy.getCookies().should('be.empty');
	});
});
