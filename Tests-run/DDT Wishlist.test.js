import Index from '../pages/index.page';
import BusquedaPage from '../pages/busqueda.page';
import DATOS from '../datos/articulos';
const homePage = new Index();
import Account from '../pages/account.page'

describe('Login', () => {
  it('Loguearse con credenciales válidas para agregar elementos a la wishlist', async () => {
    await browser.url('/')
    await new Index().toMyAccount()
    await new Account().login('raceka1308@soombo.com','RmHcJLs4YARCqAf')
    })
})

describe('Búsqueda con DDT', () => {
    DATOS.forEach(({ articulo }) => {
      it('Debería buscar ${articulo} y agregarlos a la wishlist', async () => {
        await homePage.buscar(articulo);
        await new BusquedaPage().addToWishlist()
      });
    })
  })