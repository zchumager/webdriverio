const Page = require('./page')

class HomePage extends Page {

    get commentsTxt() { return $('//textarea[@title="*Comments"]') }
    get createButton() { return $('//button[@label="save"]') }
    get hoursTxt() { return $('//input[@placeholder="Enter hours"]') }

    get newActivityBtn() {
        return $('//div[contains(@class, "sc-gzOgki fkBtPE")]//'+
        'span[contains(@class, "sc-hwwEjo boWyoH")]')
    }

    get todayDiv() { 
        return $('//div[contains(@class, "DayPicker-Day DayPicker-Day--today")]')
    }
    
    addNewActivity() {
        this.newActivityBtn.click()
    }

    setComments(comments) {
        this.commentsTxt.waitForDisplayed( {timeout: 5000} )
        this.commentsTxt.setValue(comments)
    }

    setHours(hours) {
        this.hoursTxt.waitForDisplayed({ timeout: 5000 })
        this.hoursTxt.setValue(hours)
    }

    submitSave() {
        this.createButton.waitForDisplayed( {timeout: 5000})
        this.createButton.click()
    }

    clickActivity() {
        const activity = $('//div[@role="listbox" and contains(@class, "basic")]/parent::div')
        activity.waitForDisplayed({ timeout: 5000 })
        activity.click()
    }

    clickActivityOptions(callback) {
        const optionsActivityDiv = $('//div[@role="listbox" and contains(@class, "basic")]')
        optionsActivityDiv.waitForDisplayed({timeout: 5000})
        optionsActivityDiv.click()
        callback(this)
    }

    clickDeleteOption(self) {
        const deleteOption = $('//span[contains(text(), "Delete")]/parent::div')
        deleteOption.waitForDisplayed({timeout: 5000})
        deleteOption.click()
    }

    clickCloneOption(self) {
        const cloneOption = $('//span[contains(text(), "Clone")]/parent::div')
        cloneOption.waitForDisplayed({timeout: 5000})
        cloneOption.click()
    }

    clickToday() {
        this.todayDiv.waitForDisplayed({timeout: 5000})
        this.todayDiv.click()
    }

    confirmDeleteAlert() {
        if(browser.isAlertOpen()) {
            browser.acceptAlert()
        }
    }
}

module.exports = new HomePage('Home Page')