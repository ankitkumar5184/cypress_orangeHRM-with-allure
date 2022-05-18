class AddUserName{
    BTN_XP = "a[class='firstLevelMenu']"
    BTN_ADD_XP = "input[name='btnAdd']"

    EMP_NAME_TEXT = "input[id='systemUser_employeeName_empName']"
    USERNAME_TEXT = "input[id='systemUser_userName']"
    PASSWORD_TEXT = "input[id='systemUser_password']"
    CONF_PASSWORD = "input[id='systemUser_confirmPassword']"
    BTN_SAVE = "input[name='btnSave']"
    
    gotoAdmin(){
        cy.get(this.BTN_XP).contains('Admin').click()
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers')
    }
    clickonAddUser(){
        cy.get(this.BTN_ADD_XP).click()
        
    }

    typeEmployeName(empname){
        cy.get(this.EMP_NAME_TEXT).type(empname)
    }
    typeUsername(username){
        cy.get(this.USERNAME_TEXT).type(username)
    }
    typePassword(password){
        cy.get(this.PASSWORD_TEXT).type(password)
    }
    typeConfPassword(password){
        cy.get(this.CONF_PASSWORD).type(password)
    }
    clickonSave(){
        cy.get(this.BTN_SAVE).click()
    }

}
export default AddUserName