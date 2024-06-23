describe('Listar empresas', ()=>{

    let empresaUm
    let empresaDois  

    // Get All Companies /api/company

    it('Deve ser possivel listar todas empresas', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/company"
        }).then((response)=>{
            expect(response.status).to.equal(200)

            empresaUm = response.body[0].id_company
            empresaDois = response.body[1].id_company
        })
    })

    // Get Company by ID /api/company/{id}

    it('Deve ser possivel encontrar empresa pelo ID', ()=>{
        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/company/" + empresaUm
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    })

})

