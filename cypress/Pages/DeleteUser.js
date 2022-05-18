class DeleteUser {
    BTN_XP = "a[class='firstLevelMenu']"
    SEARCH_BTN = "input[id='searchSystemUser_userName']"
    SEARCH_BTN_XP = "input[id='searchBtn']"
    DLT_BUTTON_XP = "input[type='submit']"
    CLICK_CHECKBOX = "input[type='checkbox']"
    CLICK_OK = "input[id='dialogDeleteBtn']"



    gotoAdmin() {
        cy.get(this.BTN_XP).contains('Admin').click()
    }
    searchName(name){
        cy.get(this.SEARCH_BTN).type(name)
        cy.get(this.SEARCH_BTN_XP).click({ multiple: true })
    }
    delete(){
        cy.get(this.CLICK_CHECKBOX).eq(1).click()
        cy.get(this.DLT_BUTTON_XP).contains('Delete').click()
        cy.get(this.CLICK_OK).click()

    }
}
export default DeleteUser