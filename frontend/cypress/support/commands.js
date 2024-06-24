

Cypress.Commands.add(
    "newUser",() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8400/api/user/create',
        body: {
          "name": "Julia",
          "email": "julia@mo.com",
          "telephone": "15992939192",
          "birth_date": "2000/04/14",
          "birth_city": "Campinas",
          "companies": ["6"]
        }
        ,
      });
    }
  );

  Cypress.Commands.add(
    "newUserToDelete",() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8400/api/user/create',
        body: {
          "name": "fairpwllgwopoooiii",
          "email": "louis@mo.com",
          "telephone": "9876555432577",
          "birth_date": "1999/04/19",
          "birth_city": "Sao Joao",
          "companies": ["6"]
        }
        ,
      });
    }
  );
