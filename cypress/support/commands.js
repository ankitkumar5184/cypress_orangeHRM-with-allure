import LoginPage from "../Pages/LoginPage";
import SignOut from "../Pages/SignOut";
import 'cypress-file-upload';
const loginpage = new LoginPage()
const signout = new SignOut()

Cypress.Commands.add('loginCredentials', () => {
    const username = "Admin"
    const password = "admin123"

    loginpage.navigate();
    loginpage.enterUser(username)
    loginpage.enterPass(password)
    loginpage.submit()

})
Cypress.Commands.add('logout', () => {
    signout.clickonWelcome()
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
