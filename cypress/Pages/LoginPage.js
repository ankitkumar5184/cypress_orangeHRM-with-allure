class LoginPage{
     
    USERNAME_XP = "input[id='txtUsername']"
    PASSWORD_XP = "input[type='password']"
    SUBMIT_XP = "input[type='submit']"

    navigate(){
        cy.visit('/')
    }
    enterUser(username){
        cy.get(this.USERNAME_XP)
        .clear()
        .type(username);
        return this
    }
    enterPass(password){
        cy.get(this.PASSWORD_XP)
        .clear()
        .type(password);
        return this
    }
    submit(){
        cy.get(this.SUBMIT_XP).click();
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    }
}
export default LoginPage