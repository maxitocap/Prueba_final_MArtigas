import BasePage from '../pages/base.page';

export default class Index extends BasePage {

    get languagesBox() {
    return $('#select-language')
  }
  async changeLanguageTo(option) {
    await browser.url('/');
    await this.languagesBox.selectByIndex(option);
  }
    get indexHeader() {
      return $('#header')
    }
  get selectedLanguageOption() {
    return $('select#select-language option[selected="selected"]')
  }

  async printSelectedLanguageText() {
    const text = await this.selectedLanguageOption.getText();
    console.log('El idioma de la página es "' + text + '"');
  }

  get barraBusqueda() {
    return $('#search')
    }

  get botonBusqueda() {
    return $('button[type="submit"]')
    }

  async buscar(articulo) {
    await browser.url('/');
    await this.barraBusqueda.setValue(articulo);
    await this.botonBusqueda.click();
    }

  get myAccount() {
    return $('a[href="#header-account"].skip-link.skip-account')
  }

  get myAccount2() {
    return $('a[href="http://magento-demo.lexiconn.com/customer/account/"][title="My Account"]')
  }

  async toMyAccount() {
    await this.myAccount.click()
    await this.myAccount2.click()
  }

}