export default class Account extends BasePage {

  get usernameBox() {return $('#email')}

  get passwordBox() {return $('#pass')}

  get loginButton() {return $('#send2')}

  get loginMessage() { }

  async login(username, password) {
    await this.usernameBox.setValue(username)
    await this.passwordBox.setValue(password)
    await this.loginButton.click()
  }

  async check
}
