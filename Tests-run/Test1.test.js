import Index from '../pages/testing.page';
const homePage = new Index();

describe('Cambiar idiomas', () => {
  it('Debería cambiar el idioma a inglés(0), francés(1), alemán(2)', async () => {
    await homePage.changeLanguageTo(2);
  })

  it('Imprimir el idioma de la página', async () => {
    await homePage.printSelectedLanguageText();
  })

})