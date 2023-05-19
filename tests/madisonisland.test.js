import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import DATOS from '../datos/articulos';

describe('Entrar a Madison Island', () => {
  it('Debería entrar a Madison Island', async () => {
    await browser.url('/')
  })}),
  describe('Búsqueda con DDT', () => {
    DATOS.forEach(({ articulo }) => {
      it('Debería buscar ${articulo}', async () => {
        await homePage.abrir('/');
        await homePage.buscar(articulo);
        expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
        expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
      });
    })
  })
  

describe('Test de regresión visual del header', () => {
  it('Comparación de imágenes con página de Madison Island', async () => {
    await browser.url('/');
    await $("#header").waitForDisplayed();
    expect(
      await browser.checkElement(await $("#header"), "page-header", {}),
      "Error: el header de Madison Island no coincide con la original"
    ).equal(0);

    await browser.url('http://magento-demo.lexiconn.com/?___store=german&___from_store=default');
    await $('#header').waitForDisplayed();
    expect(await browser.checkElement(await $('#header'), "page-header", {})).to.not.equal(0);
  })
})

