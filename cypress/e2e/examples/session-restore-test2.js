/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

let token;

describe('template spec', () => {
	before(() => {
		//	cy.loginUsingSession('demo1@yopmail.com', 'Pass@123');
	});

	beforeEach(() => {
		const uName = 'faizee@yopmail.com';
		const pwd = 'Pass@123';
		cy.LoginWithPageSession(uName, pwd);
	});

	it('Create an article', () => {
		cy.visit('https://react-redux.realworld.io/');

		cy.contains('New Post').click();
		cy.get("input[placeholder ='Article Title']").type(
			'Cypress hooks114' + faker.company.name()
		);
		cy.get('input[placeholder="What\'s this article about?"]').type(
			'About how cyprees hooks works'
		);
		cy.get('textarea[placeholder="Write your article (in markdown)"]').type(
			'Hooks are used to set some prerequisites'
		);
		cy.get("input[placeholder='Enter tags']").type('#cypresshooks');
		cy.contains('Publish Article').click();
		cy.wait(2000);
		cy.contains('Edit Article').should('be.visible');
	});
	it('View Global Feed', () => {
		cy.visit('https://react-redux.realworld.io/');

		cy.get('ul.nav.nav-pills.outline-active > li:nth-child(2)').click();
	});

	it('Visit page again', () => {
		cy.visit('https://react-redux.realworld.io/');
	});
});
