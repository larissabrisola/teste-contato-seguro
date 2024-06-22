import { faker } from "@faker-js/faker";

describe("Criar usuário", () => {
  let validUser = {
    name: faker.person.firstName(),
    email: faker.internet.exampleEmail(),
    telephone: faker.phone.number(),
    birth_date: faker.date.birthdate(),
    birth_city: faker.location.city(),
    companies: [6],
  };

  //os primeiros dois testes quebram pelo status code incorreto mas a criação do usuário é realizada com sucesso
  it("Deve ser possivel criar usuário ao informar todos os dados corretamente", () => {
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
      expect(response.status).to.equal(201);
    });
  });

  it("Deve ser possivel criar usuário informando somente Nome, Email, Telefone, Data e Empresa", () => {
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
      expect(response.status).to.equal(201);
    });
  });

  it("Não deve ser possivel criar usuário sem informar nome", () => {
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

  it("Não deve ser possivel criar usuário sem informar email", () => {
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

  it("Não deve ser possivel criar usuário sem informar telefone", () => {
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

  it("Não deve ser possivel criar usuário sem informar data de nascimento", () => {
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

  it("Não deve ser possivel criar usuário sem informar cidade", () => {
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
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.deep.equal({
        message: "invalid data!",
      });
    });
  });

  it("Não deve ser possivel criar usuário sem informar empresa", () => {
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

  it("Não deve ser possivel criar usuário sem informar os dados", () => {
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

  it("Não deve ser possivel criar usuário com nome inválido", () => {
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

  it("Não deve ser possivel criar usuário com email inválido", () => {
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

  it("Não deve ser possivel criar usuário com telefone inválido", () => {
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

  // o sistema é quebrado ao realizar esse teste pois a api está permitindo - comentado pois está travando de seguir outros testes - card de bug foi aberto
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

  it("Não deve ser possivel criar usuário com cidade inválida", () => {
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

  // it("Não deve ser possivel criar usuário com empresas inválidas", () => {
  //   let invalidCompanies = [
  //     ",",
  //     "#{{}}}",
  //     "     ",
  //     " ",
  //     "p>,",
  //     "@",
  //     "ç~po",
  //   ];

  //   invalidCompanies.forEach((invalidCompanie) => {
  //     cy.request({
  //       method: "POST",
  //       url: "http://localhost:8400/api/user/create",
  //       body: {
  //         name: validUser.name,
  //         email: validUser.email,
  //         telephone: validUser.telephone,
  //         birth_date: validUser.birth_date,
  //         birth_city: validUser.birth_city,
  //         companies: invalidCompanie,
  //       },
  //       failOnStatusCode: false,
  //     }).then((response) => {
  //       expect(response.status).to.equal(400);
  //     });
  //   });
  // }); // retorno 500, verificar 
});
