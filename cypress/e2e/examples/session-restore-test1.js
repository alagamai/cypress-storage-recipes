/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

let token;

describe('template spec', () => {
	before(() => {
		//	cy.loginUsingSession('demo1@yopmail.com', 'Pass@123');
	});

	beforeEach(() => {
		const uName = 'demo1@yopmail.com';
		const pwd = 'Pass@123';
		cy.loginUsingSession(uName, pwd);
	});

	it.only('Page should contain welcome message', () => {
		cy.visit('https://demoblaze.com/#');
		cy.get('#nameofuser').should('contain', 'Welcome');
	});

	it.only('Page should contain welcome message', () => {
		cy.visit('https://demoblaze.com/#');
		cy.get('#nameofuser').should('contain', 'Welcome');
	});
});
