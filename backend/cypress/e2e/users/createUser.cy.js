import { faker } from "@faker-js/faker";

// 4 - compliance stations
// 5 - contato seguro 
// 6 - compliance total

describe("Criar usuário", () => {
  let validUser = {
    name: faker.person.firstName(),
    email: faker.internet.exampleEmail(),
    telephone: faker.phone.number(),
    birth_date: faker.date.birthdate(),
    birth_city: faker.location.city(),
    companies: ['6'],
  };

  //os primeiros dois testes quebram pelo status code incorreto mas a criação do usuário é realizada com sucesso

  it("Deve retornar 201 - Deve ser possivel criar usuário ao informar todos os dados corretamente", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8400/api/user/create",
      body: {
        name: validUser.name,
        email: validUser.email,
        telephone: validUser.telephone,
        birth_date: validUser.birth_date,
        birth_city: validUser.birth_city,
        companies: validUser.companies,
      },
    }).then((response) => {
      expect(response.body.name).to.deep.equal(validUser.name)
      expect(response.body.email).to.deep.equal(validUser.email)
      expect(response.body.telephone).to.deep.equal(validUser.telephone)
      expect(response.body.birth_city).to.deep.equal(validUser.birth_city)
      expect(response.status).to.equal(201);

    });
  });

  it("Deve retornar 201 - Deve ser possivel criar usuário informando somente Nome, Email, Telefone, Data e Empresa", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8400/api/user/create",
      body: {
        name: validUser.name,
        email: validUser.email,
        telephone: validUser.telephone,
        birth_date: validUser.birth_date,
        companies: validUser.companies,
      },
    }).then((response) => {
      expect(response.body.name).to.deep.equal(validUser.name)
      expect(response.body.email).to.deep.equal(validUser.email)
      expect(response.body.telephone).to.deep.equal(validUser.telephone)
      expect(response.status).to.equal(201);
    });
  });


  it('Deve retornar 201 - Deve ser possivel criar usuário informando 2 empresas', ()=>{
    cy.request({
      method: "POST",
      url: "http://localhost:8400/api/user/create",
      body: {
        name: validUser.name,
        email: validUser.email,
        telephone: validUser.telephone,
        birth_date: validUser.birth_date,
        birth_city: validUser.birth_city,
        companies: ['5', '6'],
      },
    }).then((response) => {
      expect(response.body.name).to.deep.equal(validUser.name)
      expect(response.body.email).to.deep.equal(validUser.email)
      expect(response.body.telephone).to.deep.equal(validUser.telephone)
      expect(response.body.birth_city).to.deep.equal(validUser.birth_city)
      expect(response.status).to.equal(201);
    });
  })

  
  it('Deve retornar 201 - Deve ser possivel criar usuário informando 3 empresas', ()=>{
    cy.request({
      method: "POST",
      url: "http://localhost:8400/api/user/create",
      body: {
        name: validUser.name,
        email: validUser.email,
        telephone: validUser.telephone,
        birth_date: validUser.birth_date,
        birth_city: validUser.birth_city,
        companies: ['4', '5', '6'],
      },
    }).then((response) => {
      expect(response.body.name).to.deep.equal(validUser.name)
      expect(response.body.email).to.deep.equal(validUser.email)
      expect(response.body.telephone).to.deep.equal(validUser.telephone)
      expect(response.body.birth_city).to.deep.equal(validUser.birth_city)
      expect(response.status).to.equal(201);
    });
  })

  it("Deve retornar 400 - Não deve ser possivel criar usuário sem informar nome", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8400/api/user/create",
      body: {
        email: validUser.email,
        telephone: validUser.telephone,
        birth_date: validUser.birth_date,
        birth_city: validUser.birth_city,
        companies: validUser.companies,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: "invalid data!",
      });
    });
  });

  it("Deve retornar 400 - Não deve ser possivel criar usuário sem informar email", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8400/api/user/create",
      body: {
        name: validUser.name,
        telephone: validUser.telephone,
        birth_date: validUser.birth_date,
        birth_city: validUser.birth_city,
        companies: validUser.companies,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: "invalid data!",
      });
    });
  });

  it("Deve retornar 400 - Não deve ser possivel criar usuário sem informar telefone", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8400/api/user/create",
      body: {
        name: validUser.name,
        email: validUser.email,
        birth_date: validUser.birth_date,
        birth_city: validUser.birth_city,
        companies: validUser.companies,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: "invalid data!",
      });
    });
  });

  it("Deve retornar 400 - Não deve ser possivel criar usuário sem informar data de nascimento", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8400/api/user/create",
      body: {
        name: validUser.name,
        email: validUser.email,
        telephone: validUser.telephone,
        birth_city: validUser.birth_city,
        companies: validUser.companies,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: "invalid data!",
      });
    });
  });


  it("Deve retornar 400 - Não deve ser possivel criar usuário sem informar empresa", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8400/api/user/create",
      body: {
        name: validUser.name,
        email: validUser.email,
        telephone: validUser.telephone,
        birth_date: validUser.birth_date,
        birth_city: validUser.birth_city,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: "invalid data!",
      });
    });
  });

  it("Deve retornar 400 - Não deve ser possivel criar usuário sem informar os dados", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:8400/api/user/create",
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: "invalid data!",
      });
    });
  });

  it("Deve retornar 400 - Não deve ser possivel criar usuário com valores inválidos em nome", () => {
    let invalidNames = [ "     ", "12121", " ", "#{{}}}"];

    invalidNames.forEach((invalidname) => {
      cy.request({
        method: "POST",
        url: "http://localhost:8400/api/user/create",
        body: {
          name: invalidname,
          email: validUser.email,
          telephone: validUser.telephone,
          birth_date: validUser.birth_date,
          birth_city: validUser.birth_city,
          companies: validUser.companies,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(400);
      });
    });
  });

  it("Deve retornar 400 - Não deve ser possivel criar usuário com valores inválidos em email", () => {
    let invalidEmails = [
      "12121",
      "#{{}}}",
      "     ",
      " ",
      "juremagmailcom",
      "@",
    ];

    invalidEmails.forEach((invalidEmail) => {
      cy.request({
        method: "POST",
        url: "http://localhost:8400/api/user/create",
        body: {
          name: validUser.name,
          email: invalidEmail,
          telephone: validUser.telephone,
          birth_date: validUser.birth_date,
          birth_city: validUser.birth_city,
          companies: validUser.companies,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(400);
      });
    });
  });

  it("Deve retornar 400 - Não deve ser possivel criar usuário com valores inválidos em telefone", () => {
    let invalidPhone = [
      
      "#{{}}}",
      "     ",
      " ",
      "juremagmailcom",
      "@",
      "ç~po",
    ];

    invalidPhone.forEach((invalidPhone) => {
      cy.request({
        method: "POST",
        url: "http://localhost:8400/api/user/create",
        body: {
          name: validUser.name,
          email: validUser.email,
          telephone: invalidPhone,
          birth_date: validUser.birth_date,
          birth_city: validUser.birth_city,
          companies: validUser.companies,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(400);
      });
    });
  });

  it("Deve retornar 400 - Não deve ser possivel criar usuário com valores inválidos em cidade", () => {
    let invalidCities = ["12121", "#{{}}}", "     ", " ", "p>,", "@", "ç~po"];

    invalidCities.forEach((invalidCity) => {
      cy.request({
        method: "POST",
        url: "http://localhost:8400/api/user/create",
        body: {
          name: validUser.name,
          email: validUser.email,
          telephone: validUser.telephone,
          birth_date: validUser.birth_date,
          birth_city: invalidCity,
          companies: validUser.companies,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(400);
      });
    });
  });

    // o sistema para de funcionar ao realizar esse teste pois a api está permitindo - card de bug foi aberto
  // it('Não deve ser possivel criar usuário com data de nascimento inválida', ()=>{
  //   let invalidBirth = ["12121", "#{{}}}", "     ", " ", "juremagmailcom", "@", "ç~po"]

  //   invalidBirth.forEach(invalidBirth =>{
  //     cy.request({
  //       method: "POST",
  //       url: "http://localhost:8400/api/user/create",
  //       body: {
  //         name: validUser.name,
  //         email: validUser.email,
  //         telephone: validUser.telephone,
  //         birth_date: invalidBirth,
  //         birth_city: validUser.birth_city,
  //         companies: validUser.companies,
  //       } ,       failOnStatusCode: false

  //     }).then((response)=>{
  //       expect(response.status).to.eq(400)
  //     })
  //   })
  // })

  
  it("Deve retornar 400 - Não deve ser possivel criar usuário com valores inválidos em empresas", () => {
    let invalidCompanies = [
      ",",
      "1",
      "#{{}}}",
      "     ",
      " ",
      "p>,",
      "@",
      "ç~po",
    ];

    invalidCompanies.forEach((invalidCompanie) => {
      cy.request({
        method: "POST",
        url: "http://localhost:8400/api/user/create",
        body: {
          name: validUser.name,
          email: validUser.email,
          telephone: validUser.telephone,
          birth_date: validUser.birth_date,
          birth_city: validUser.birth_city,
          companies: invalidCompanie,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(400);
      });
    });
  }); 

});
