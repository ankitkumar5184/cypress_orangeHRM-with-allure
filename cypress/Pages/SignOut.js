class SignOut{
    SIGN_OUT_XP = "a[id='welcome']"
    XP_LOGOUT = '//*[@id="welcome-menu"]/ul/li[3]/a'
    clickonWelcome(){
        cy.get(this.SIGN_OUT_XP).click()
        cy.xpath(this.XP_LOGOUT).click()
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/index.php/auth/login')

    }
}
export default SignOut