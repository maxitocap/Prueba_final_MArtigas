import Index from '../pages/index.page';
const homePage = new Index();

describe('Interactuar con los anteojos', () => {
  it('Debería buscar los anteojos', async () => {
    await browser.url('/');
    const articulo = 'RETRO CHIC EYEGLASSES';
    await barraDeBusqueda.setValue(articulo);

    // expect(await homePage.obtenerTextoBusqueda()).to.equal(articulo);
    // expect(await busquedaPage.obtenerNombreResultado()).to.equal(articulo);
  })

  // it('Agrega los anteojos al carrito', async () => {
  //   const comprar = await $('button.button.btn-cart[title="Add to Cart"]');
  //   if (comprar.length) {
  //     const offset = comprar.offset().top;
  //     const windowHeight = $(window).height();
  //     if (offset > windowHeight) {
  //       $('html, body').animate({ scrollTop: offset - (0.5 * windowHeight) }, 500);
  //     }
  //     await comprar.click();
  //   }
  // })
})