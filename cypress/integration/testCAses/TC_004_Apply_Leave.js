import ApplyLeave  from "../../Pages/ApplyLeave";

const applyLeave = new ApplyLeave()

describe("Page object Model in Cypress", function () {


    it("Apply Leave in OrangeHRM", function () {
        const from =  "2022-01-18"
        const to =  "2022-05-18"
        const name = "Admin A"

        cy.loginCredentials()
        applyLeave.gotoLeave()
        applyLeave.applytoApply(from,to,name)
        cy.logout()
    })
})