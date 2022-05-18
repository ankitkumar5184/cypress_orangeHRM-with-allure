import AddUserName from "../../Pages/AddUserName"
const addusername = new AddUserName()

describe("Page object Model in Cypress", function () {
    it("Add User in OrangeHRM", function () {
        const empname = "Aaliyah Haq"
        const username = "aman12"
        const password = "Password@123"

        cy.loginCredentials()
        addusername.gotoAdmin()
        addusername.clickonAddUser()
        addusername.typeEmployeName(empname)
        addusername.typeUsername(username)
        addusername.typePassword(password)
        addusername.typeConfPassword(password)
        addusername.clickonSave()
        cy.wait(5000)
        cy.logout()        
    })
})