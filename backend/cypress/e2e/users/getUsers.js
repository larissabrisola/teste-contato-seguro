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
            cy.log(id, email, phone, birth, city, companie)
        })
    })
    
    // Get All Users /api/user

    it('Deve ser possivel listar todos usuários cadastrados', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/user"
        }).then((response)=>{
            // expect(response.body)
        })
    })


    // Get User by ID /api/user/{id}


    it('Deve ser possivel encontrar usuário pelo ID', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/user/" + id
        }).then((response)=>{
            expect(response.body.id_user).to.equal(id)
            expect(response.body.name).to.equal(name)
            expect(response.body.email).to.equal(email)
            
        })
    })

    it('Não deve ser possivel encontrar usuário pelo nome', ()=>{

    })

    it('Não deve ser possivel encontrar usuário pelo email', ()=>{

    })

    it('Não deve ser possivel encontrar usuário pelo telefone', ()=>{

    })

    it('Não deve ser possivel encontrar usuário pela cidade', ()=>{

    })

    it('Não deve ser possivel encontrar usuário pela empresa', ()=>{

    })
})
