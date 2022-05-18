class ApplyLeave {
    BTN_XP = "a[class='firstLevelMenu']"
    FROM_XP = "input[id='calFromDate']"
    TO_PATH = "input[id='calToDate']"
    CLICK_CHECKBOX = "input[id='leaveList_chkSearchFilter_checkboxgroup_allcheck']"
    TYPE_USERNAME_TEXT = "input[id='leaveList_txtEmployee_empName']"
    BTN_SEARCH = "input[id='btnSearch']"
    gotoLeave() {
        cy.get(this.BTN_XP).contains('Leave').click()
        cy.url().should('be.equal','https://opensource-demo.orangehrmlive.com/index.php/leave/viewLeaveList')
    }
    applytoApply(from,to,name){
        cy.get(this.FROM_XP).type(from).type('{enter}')
        cy.get(this.TO_PATH).type(to).type('{enter}')
        cy.get(this.CLICK_CHECKBOX).click()
        cy.get(this.TYPE_USERNAME_TEXT).type(name).type('{enter}')
        cy.get(this.BTN_SEARCH).click()
    }

}
export default ApplyLeave