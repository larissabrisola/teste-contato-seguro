describe('Atualizar informações do usuário', ()=>{
    let id 
    before(()=>{
        cy.newUser().then((response)=>{
            id = response.id.id_user
        })
    })


    it('Deve ser possivel atualizar informações do usuário', ()=>{
        // {
        //     "name": "string",
        //     "e-mail": "string",
        //     "companies": ["string"]
        // }
    })

    // Não pude criar outros casos de testes pois não possuo a informação de quais são os campos alteraveis ou se a alteração deve ser realizada simultaneamente
})