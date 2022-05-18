class RecruitmentPage {
    MENU_XP = "a[class='firstLevelMenu']";
    ADD_BTN = "input[id='btnAdd']"
    TEXT_INPUT = "input[type='text']"
    DROP_DOWN = "select[class='vacancyDrp']"
    FILE_UPLOAD = "input[type='file']"
    COMMENT_SECTION = "textarea[id='addCandidate_comment']"
    BTN_SAVE = "input[id='btnSave']"

    gotoRecruiter() {
        cy.get(this.MENU_XP).contains('Recruitment').click()
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/index.php/recruitment/viewCandidates')
        
    }

    //Synchronous code
    anchorCount() {
        let arr = []
        cy.get("a")
            .then((els) => {
                for (let index = 0; index < els.length; index++) {
                    arr.push(Cypress.$(els[index]).text());
                }
                return arr;
            })
            .then((myarr) => {
                cy.wait(5000)
                console.log(`Anchor tag count - ${myarr.length}`)
                console.log(`Anchor tag text string - ${myarr.join(", ")}`);
            })
    }

    clickOnADDBTN() {
        cy.get(this.ADD_BTN).click()
    }

    enterText(fname, mname, lname, email, contactno,keyword,comment) {
        cy.get(this.TEXT_INPUT).eq(0).type(fname)
        cy.get(this.TEXT_INPUT).eq(1).type(mname)
        cy.get(this.TEXT_INPUT).eq(2).type(lname)
        cy.get(this.TEXT_INPUT).eq(3).type(email)
        cy.get(this.TEXT_INPUT).eq(4).type(contactno)
        cy.get(this.TEXT_INPUT).eq(5).type(keyword)
        cy.get(this.COMMENT_SECTION).type(comment)
    }

    //synch 
    TextCount() {
        let arr = []
        cy.get("div")
            .then((els) => {
                for (let index = 0; index < els.length; index++) {
                    arr.push(Cypress.$(els[index]).text());
                }
                return arr;
            })
            .then((myarr) => {
                cy.wait(5000)
                console.log(`div tag count ${myarr.length}`)  // asynchronous commands
                console.log(`div tag text string - ${myarr.join(", ")}`);
            })
    }
    dropDOWN() {
        cy.get(this.DROP_DOWN).select('Payroll Administrator')
    }

    fileUpload(filepath){
        cy.get(this.FILE_UPLOAD).attachFile(filepath)
        
    }
    clickSAve(){
        cy.get(this.BTN_SAVE).click()
        cy.get('.message').then((test) =>{
            cy.log(test)
        })
        
    }


}
export default RecruitmentPage