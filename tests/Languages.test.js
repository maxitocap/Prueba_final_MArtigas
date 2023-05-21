import Index from '../pages/index.page';
const homePage = new Index();

describe('Cambiar idiomas', () => {
  it('Debería cambiar el idioma', async () => {
    await homePage.changeLanguageTo(2); //Para el inglés(0), francés(1), alemán(2)
  })

  it('Imprimir el idioma de la página', async () => {
    await homePage.printSelectedLanguageText();
  })

})