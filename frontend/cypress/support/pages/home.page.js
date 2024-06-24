export default class HomePage {
    btnNewUser = "button#new-user"
    btnDeletar = "#root > main > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button:nth-child(2)"

    clickBtnNewUser(){
        cy.get(this.btnNewUser).click()
    }

    clickBtnDeletar(){
        cy.get(this.btnDeletar).click()
    }
}