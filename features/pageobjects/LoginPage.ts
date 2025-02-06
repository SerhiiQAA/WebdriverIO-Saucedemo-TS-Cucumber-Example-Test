class LoginPage {

    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('[data-test="error"]'); } 

    async open() {
        await browser.url('https://www.saucedemo.com/'); 
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getErrorMessageText() {
        return this.errorMessage.getText();
    }
}

export default new LoginPage();

