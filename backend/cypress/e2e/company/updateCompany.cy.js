describe('Atualizar informações de empresas', ()=>{

    before(()=>{
        // criar empresa
    })

    
    it('Deve ser possivel atualizar informações da empresa atraves do ID', ()=>{
        cy.request({
            method: "PATCH", 
            url: "http://localhost:8400/api/company/" + id + "/update", 
            body: {
                "name": "string",
                "cnpj": "string",
                "adress": {
                    "cep": "string",
                    "country": "string",
                    "state": "string",
                    "city": "string",
                    "street": "string",
                    "number": "string",
                    "district": "string"
               }
            }
        })
    })
})
