import Index from '../pages/index.page';
describe('Test de regresión visual del header', () => {
  it('Comparación de imágenes con página de Madison Island', async () => {
    await browser.url('/');
    await $("#header").waitForDisplayed();
    expect(
      await browser.checkElement(await $("#header"), "page-header", {}), "Error: el header de Madison Island no coincide con la original").equal(0);
   
    const homePage = new Index();
    await homePage.changeLanguageTo(2)
    await $('#header').waitForDisplayed();
    expect(await browser.checkElement(await $('#header'), "page-header", {})).to.not.equal(0);
  })})
