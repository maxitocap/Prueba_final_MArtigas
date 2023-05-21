import BasePage from '../pages/base.page';

export default class Index extends BasePage {

  get languagesBox() {
    return $('#select-language')
  }
  async changeLanguageTo(option) {
    await browser.url('/');
    await this.languagesBox.selectByIndex(option);
  }

  get selectedLanguageOption() {
    return $('select#select-language option[selected="selected"]')
  }
  async printSelectedLanguageText() {
    const text = await this.selectedLanguageOption.getText();
    console.log('El idioma de la página es "' + text + '"');
  }

  get barraDeBusqueda() {
    return $('#search')
  }

}