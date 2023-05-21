export default class Index{

  get languagesBox(){
    return $('#select-language')
  }
    async changeLanguageToFrench() {
    await browser.url('/');
    await this.languagesBox.selectByIndex(1);
  }

    async changeLanguageToGerman() {
    await browser.url('/');
    await this.languagesBox.selectByIndex(2);
  }

    async changeLanguageToEnglish() {
    await browser.url('/');
    await this.languagesBox.selectByIndex(0);
  }
}