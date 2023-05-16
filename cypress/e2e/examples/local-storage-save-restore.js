/// <reference types="cypress" />

let token;

describe('template spec', () => {
	beforeEach(() => {
		cy.visit('cypress/html/storage.html');
		cy.restoreLocalStorage();
	});

	afterEach(() => {
		cy.get('[data-cy="set-ls"]').click();
		cy.saveLocalStorage();
	});

	it.only('it should save and restore local storage', () => {
		cy.window().then(win => {
			//check console log
			console.log(win.localStorage.getItem('key1'));
		});
	});

	it.only('test2 ', () => {
		cy.window().then(win => {
			console.log(win.localStorage.getItem('key2'));
		});
		//cy.get('#nameofuser').should('contain', 'Welcome')
	});
});
