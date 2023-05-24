import BasePage from '../pages/base.page';

export default class Account extends BasePage { 

  get usernameBox() {
    return $('#email')
  }

  get passwordBox() {
    return $('#pass')
  }

  get loginBut() {
    return $('#send2')
  }

  get loginMsg() {
    return $('.hello')
  }

  async login(username, password){
    await this.usernameBox.setValue(username)
    await this.passwordBox.setValue(password)
    await this.loginBut.click()
  }

  async checkMsg(msg) {
    await expect(this.loginMsg).toHaveTextContaining(msg)
  }
}