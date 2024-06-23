export default class HomePage {
    btnNewUser = "button#new-user"

    clickBtnNewUser(){
        cy.get(this.btnNewUser).click()
    }
}