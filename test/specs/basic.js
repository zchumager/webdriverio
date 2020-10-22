const loginPage = require('../pageobjects/login.page')
const homePage = require('../pageobjects/home.page')

describe('open nova setting no stayed in', () => {
    it('should login into nova', () => {
        loginPage.open()
        loginPage.signInBtn.click()
        loginPage.setUserEmail('pedro.machado@itexico.com')
        loginPage.submit()
        loginPage.setUserPassword('*2019Zchumager10')
        loginPage.submit()
        loginPage.setNoStayedIn()

        expect(browser).toHaveUrl('https://nova.itexico.com/')
    })

    it('should create a new activity', () => {
        homePage.addNewActivity()
        homePage.setHours(8)
        homePage.setComments('Test Comment')
        homePage.submitSave()
    })

    it('should modify an existing activity', () => {
        homePage.clickActivity()
        homePage.setComments(" Modification")
        homePage.submitSave()
    })

    it('should clone an existing activity', () => {
        homePage.clickActivityOptions(homePage.clickCloneOption)
        homePage.clickToday()
        homePage.submitSave()
        
        // delete clone for cleanup
        homePage.clickActivityOptions(homePage.clickDeleteOption)
        homePage.confirmDeleteAlert()
    })

    it('should delete an existing an existing activity', () => {
        homePage.clickActivityOptions(homePage.clickDeleteOption)
        homePage.confirmDeleteAlert()
    })
})