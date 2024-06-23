describe('Deletar empresa', ()=>{

    it('Deve ser possivel deletar empresa', ()=>{
        cy.request({
            method: "PATCH", 
            url: "http://localhost:8400/api/company/" + id + "/delete", 
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