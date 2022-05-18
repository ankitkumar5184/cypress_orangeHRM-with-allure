import RecruitmentPage from "../../Pages/RecruitmentPage"

const recruitmentpage = new RecruitmentPage();

describe("Page object Model in Cypress", function () {


    it("Recruitment in OrangeHRM", function () {

        const fname = "Ram";
        const mname = "kumar"
        const lname =  "yadav"
        const email = "abc4554@gmail.com"
        const contactno = "1234567895"
        const keyword = "anythiong"
        const comment = "see the details in resume"
        const filepath = "resume.pdf"


        cy.loginCredentials()
        recruitmentpage.gotoRecruiter();
        recruitmentpage.anchorCount()
        recruitmentpage.clickOnADDBTN();
        recruitmentpage.enterText(fname,mname,lname,email,contactno,keyword,comment)
        recruitmentpage.TextCount()
        recruitmentpage.dropDOWN()
        recruitmentpage.fileUpload(filepath)
        recruitmentpage.clickSAve()
        cy.wait(2000)
        cy.logout()

    })
})