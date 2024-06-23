describe('Atualizar informações do usuário', ()=>{
    let id 

    before(()=>{
        cy.newUser().then((response)=>{
            id = response.id_user
        })
    })

    it('Deve ser possivel atualizar informações do usuário', ()=>{
        cy.request({
            method: "PATCH", 
            url: "http://localhost:8400/api/user/" + id + "/update", 
            body: {
                name: "Hulio", 
                email: "jay@gmail.com", 
                companies: ["4"]
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    })

    // Não pude criar outros casos de testes pois não possuo a informação de quais são os campos alteraveis ou se a alteração deve ser realizada simultaneamente
})