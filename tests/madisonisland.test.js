import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import DATOS from '../datos/articulos';


describe('Entrar a Madison Island', () => {
  it('Debería entrar a Madison Island', async () => {
    await browser.url('/');
  })

  it('Debería cambiar el idioma primero a francés, luego a alemán y por último a inglés', async () => {
    const dropDownLanguage = await $('#select-language');
    await dropDownLanguage.selectByIndex(1)
    await dropDownLanguage.selectByIndex(2)
    await dropDownLanguage.selectByIndex(0)
  })

    it('Debería buscar los anteojos', async () => {
    await homePage.abrir('/');
    const articulo = 'RETRO CHIC EYEGLASSES';
    await homePage.buscar(articulo);
    expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
    expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
  })

  it('Agrega los anteojos al carrito', async () => {
    const comprar = await $('button.button.btn-cart[title="Add to Cart"]');
    if (comprar.length) {
      const offset = comprar.offset().top;
      const windowHeight = $(window).height();
      if (offset > windowHeight) {
        $('html, body').animate({ scrollTop: offset - (0.5 * windowHeight) }, 500);
      }
      await comprar.click();
    }})

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
  })

describe('Test de regresión visual del header', () => {
  it('Comparación de imágenes con página de WebdriverIO', async () => {
    await browser.url('/');
    await $("#header").waitForDisplayed();
    expect(
      await browser.checkElement(await $("#header"), "wdio-headerContainer", {
        /* opciones de configuración para el elemento */
      }),
      "Error: la barra de navegación de WebdriverIO no coincide con la original"
    ).equal(0);

    await browser.url('http://magento-demo.lexiconn.com/?___store=german&___from_store=default');
    await $('#header').waitForDisplayed();
    expect(await browser.checkElement(await $('#header'), 'wdio-headerContainer', {})).to.not.equal(0);
  })
})
