/// <reference types= "cypress" />

describe('Listar usuários', ()=>{

    let id
    let name 
    let city
    let birth 
    let phone 
    let companie
    let email 

    before(()=>{
        cy.newUser().then((response)=>{
            id = response.body.id_user
            name = response.body.name
            email = response.body.email
            phone = response.body.telephone 
            birth = response.body.birth_date 
            city = response.body.birth_city 
            companie = response.body.companies 
        })
    })
    
    it('Deve retornar 200 - Deve ser possivel listar todos usuários cadastrados', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/user"
        }).then((response)=>{
            expect(response.body).to.be.an('array')
            expect(response.body[0]).to.have.property('id_user')
            expect(response.status).to.equal(200)
        })
    })

    it('Deve retornar 200 - Deve ser possivel encontrar usuário pelo ID', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/user/" + id
        }).then((response)=>{
            expect(response.status).to.equal(200)

            expect(response.body.id_user).to.equal(id)
            expect(response.body.name).to.equal(name)
            expect(response.body.email).to.equal(email)
            expect(response.body.telephone).to.equal(phone)
            expect(response.body.birth_city).to.equal(city)
            expect(response.body.birth_date).to.equal(birth)
            expect(response.body.companies).to.equal(companie)
        })
    })

    it('Deve retornar 400 - Não deve ser possivel encontrar usuário pelo nome', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/user/" + name, 
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
        })
    })

    it('Deve retornar 400 - Não deve ser possivel encontrar usuário pelo email', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/user/" + email, 
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
        })
    })

    it('Deve retornar 400 - Não deve ser possivel encontrar usuário pela cidade', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/user/" + city, 
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
        })
    })

    it('Deve retornar 400 - Não deve ser possivel encontrar usuário pela empresa', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/user/" + companie, 
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
        })
    })


})
