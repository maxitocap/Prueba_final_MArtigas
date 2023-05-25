import Index from '../pages/index.page';
describe('Test de regresión visual del header', () => {
  it('Comparación de imágenes con página de Madison Island', async () => {
    addStep('Abre el navegador en la página Madison Island');
    await browser.url('/');
    addStep('Toma una captura del header');
    await $("#header").waitForDisplayed();
    expect(
      await browser.checkElement(await $("#header"), "page-header", {}), "Error: el header de Madison Island no coincide con la original").equal(0);
    addStep('Cambia el idioma de la página al alemán')
    const homePage = new Index();
    await homePage.changeLanguageTo(2);
    addStep('Toma una captura del header con el nuevo idioma para comparar si ha cambiado efectivamente');
    await $('#header').waitForDisplayed();
    expect(await browser.checkElement(await $('#header'), "page-header", {})).to.not.equal(0);
  })})
