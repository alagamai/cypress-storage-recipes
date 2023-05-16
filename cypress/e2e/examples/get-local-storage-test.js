/// <reference types="cypress-localstorage-commands" />

describe('local storage test', () => {
	it.only('access local storage', () => {
		cy.visit('http://autopract.com/');
		cy.get('[type="button"].close').click();

		cy.window().then(win => {
			cy.log('Num of items in local storage ' + win.localStorage.length);
			cy.log('no of item in localstorage using cy comand' + cy.lo);
			for (let i = 0; i < win.localStorage.length; i++) {
				const key = win.localStorage.key(i);
				cy.log(key);
				//cy.log(win.localStorage.getItem(key))
			}
			const data = JSON.parse(win.localStorage.getItem('products'));
			cy.log('Products len    ====' + data.length + ' title ' + data[0].title);
		});

		//cy.log(data.title)
	});

	it.only('relogin', () => {
		cy.visit('http://autopract.com/');
		cy.getAllLocalStorage().then(getall => {
			cy.log(getall);
		});
	});
});
