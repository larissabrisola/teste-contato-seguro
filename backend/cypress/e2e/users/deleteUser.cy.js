describe('Deletar usuário', ()=>{
    let id 
    before(()=>{
        cy.newUser().then((response)=>{
            id = response.body.id_user
        })
    })

    it('Deve ser possivel deletar o usuário', ()=>{
        cy.request({
            method: "DELETE",
            url: "http://localhost:8400/api/user/" + id + "/delete"
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })

        // verificando se o usuário foi excluido

        cy.request({
            method: "GET", 
            url: "http://localhost:8400/api/user/" + id
        }).then((response)=>{
            expect(response.body).to.not.have.property("id_user");
        })
    })
})