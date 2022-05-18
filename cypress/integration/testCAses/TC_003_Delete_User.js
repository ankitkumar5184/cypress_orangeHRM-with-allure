import DeleteUser from "../../Pages/DeleteUser"

const deleteuser = new DeleteUser()


describe("Page object Model in Cypress", function () {


    it("Delete User in OrangeHRM", function () {

        const name = "aman12"
        cy.loginCredentials()
        deleteuser.gotoAdmin()        
        deleteuser.searchName(name)
        deleteuser.delete()
        cy.logout()
    })
})