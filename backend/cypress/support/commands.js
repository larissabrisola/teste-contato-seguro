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

// Cypress.Commands.add(
//   "createUser",(name, email, companies, failOnStatusCode) => {
//     cy.request({
//       method: 'POST',
//       url: 'http://localhost:8400/api/user/create',
//       body: {
//         "name": "{{$randomFirstName}}",
//         "email": "{{$randomExampleEmail}}",
//         "telephone": "{{$randomPhoneNumber}}",
//         "birth_date": "2000/04/14",
//         "birth_city": "{{$randomCity}}",
//         "companies": [6]
//       }
//       ,

      
//       failOnStatusCode: failOnStatusCode,
//     });
//   }
// );
