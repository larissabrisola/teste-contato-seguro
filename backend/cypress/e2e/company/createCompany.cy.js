/// <reference types= "cypress" />


describe('Cadastro de empresa', ()=>{

    it('Deve ser possivel criar empresa', ()=>{
       cy.request({
        method: "POST", 
        url: "http://localhost:8400/api/company/create", 
        body: {
            "name": "green",
            "cnpj": "66666666666",
            "adress": {
                "cep": "2000000",
                "country": "Brasil",
                "city": "São Paulo",
                "street_location": "Rua do bobo",
                "number": "10",
                "district": "SP"
           }
        }
       }).then((response)=>{
            expect(response.status).to.equal(201)
            // não possuo informação do response body para realizar mais validações 
       })
    })
})

