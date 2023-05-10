it('Agrega los anteojos al carrito', async () => {
    const comprar = await $('button.button.btn-cart[title="Add to Cart"]');
      if (comprar.length) {
        const offset = comprar.offset().top;
        const windowHeight = $(window).height();
      if (offset > windowHeight) {
        $('html, body').animate({ scrollTop: offset - (0.5 * windowHeight) }, 500);
       }
  // Hacer clic en el botón
      comprar.click();
} else {
  console.log('No se pudo encontrar el botón');
}
    
    await browser.pause(10000)
  })
