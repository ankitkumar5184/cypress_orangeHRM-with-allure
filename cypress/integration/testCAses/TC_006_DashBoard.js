import DashBoard from "../../Pages/DashBoard";

const dashboard = new DashBoard();
describe("Page object Model in Cypress", function () {


    it("Recruitment in OrangeHRM", function () {
        cy.loginCredentials()
        dashboard.goToChart()
    })
})