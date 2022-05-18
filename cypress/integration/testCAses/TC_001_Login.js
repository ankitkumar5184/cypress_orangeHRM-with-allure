/// <reference types="cypress" />
import LoginPage from "../../Pages/LoginPage";

const loginpage = new LoginPage()

describe("Page object Model in Cypress", function () {
   

    it("Login with valid credentials in OrangeHRM", function () {
        cy.loginCredentials()
        cy.logout()
        

    })


})