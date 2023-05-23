import BasePage from '../pages/base.page';
import Index from '../pages/index.page';
const homePage = new Index();
export default class BusquedaPage extends BasePage {

    get compareProducts(){
        return $('.link-compare')
    }

    async compare(compare1, compare2) {
        
        await homePage.buscar(compare1)
        await this.compareProducts.click()

        await homePage.buscar(compare2)
        await this.compareProducts.click()

        await $('button[title="Compare"]')
        browser.pause(50000)
    }
}