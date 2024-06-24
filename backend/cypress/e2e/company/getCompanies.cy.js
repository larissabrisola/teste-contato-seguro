/// <reference types= "cypress" />

describe('Listar empresas', ()=>{

    let empresaUm
    let empresaDois  
    let name
    // before(()=>{
    //     // criar empresa
    // })
    
    it('Deve ser possivel listar todas empresas', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/company"
        }).then((response)=>{
            expect(response.status).to.equal(200)
            cy.log(response.body[0])
            empresaUm = response.body[0].id_company
            empresaDois = response.body[1].id_company
            name  = response.body[0].name
        })
    })

    it('Deve ser possivel encontrar empresa pelo ID', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/company/" + empresaUm
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    })

    it('Deve retornar 400 ao buscar ID de empresa inexistente', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/company/" + "2", 
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
        })
    })

    it('Deve retornar 400 ao buscar empresa pelo nome', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/company/" + name, 
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
        })
    })



})

