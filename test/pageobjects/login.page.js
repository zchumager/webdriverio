const Page = require('./page')

class LoginPage extends Page {
    get signInBtn() { return $('//div[@class="sc-bxivhb iQYuoY"]//child::a') }
    get submitBtn() { return $('#idSIButton9') }
    get userEmailTxt() { return $('//input[@name="loginfmt"]') }
    get userPasswordTxt() { return $('//input[@name="passwd"]') }
    get noStayedInBtn() { return $('#idBtn_Back') }

    open() {
        super.open('https://nova.itexico.com/login')
    }

    setNoStayedIn() {
        this.noStayedInBtn.waitForDisplayed({timeout: 5000})
        this.noStayedInBtn.click()
    }

    setUserEmail(email) {
        this.userEmailTxt.waitForDisplayed({timeout: 5000})
        this.userEmailTxt.setValue(email)
    }

    setUserPassword(password) {
        this.userPasswordTxt.waitForDisplayed( {timeout: 5000} )
        this.userPasswordTxt.setValue(password)
    }

    submit() {
        this.submitBtn.waitForDisplayed({timeout: 5000})
        this.submitBtn.click()
    }
}

module.exports = new LoginPage('iTexico - Nova')