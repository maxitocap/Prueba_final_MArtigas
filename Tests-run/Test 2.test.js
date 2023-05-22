import Index from '../pages/index.page';
import BusquedaPage from '../pages/busqueda.page'
const homePage = new Index();

describe('Interactuar con los anteojos', () => {
  it('Debería buscar los anteojos y agregar cuatro pares al carrito', async () => {

    await homePage.buscar('glasses')

    // await $('#search').setValue(articulo);
    // await $('button[type="submit"]').click()

    //Segundo paso
    // await $('#product-collection-image-339').click()
    // await $('#qty').setValue(4)
    // await $('button[class="button btn-cart"]').click()
    // browser.pause(4000)
  })
})