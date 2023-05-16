const { defineConfig } = require('cypress');
let cookieUser, CookieToken;

module.exports = defineConfig({
	e2e: {
		// baseUrl: "http://localhost:8080",
		//experimentalSessionAndOrigin: true,
		setupNodeEvents(on, config) {
			// implement node event listeners here
			on('task', {
				setCookieUser: value => {
					return (cookieUser = value);
				},
				setCookieToken: value => {
					return (CookieToken = value);
				},
				getCookieUser: () => {
					return cookieUser;
				},
				getCookieToken: () => {
					return CookieToken;
				},
			}),
				require('cypress-localstorage-commands/plugin')(on, config);
			return config;
		},
		specPattern: 'cypress/e2e/examples/*.js',
	},
});
