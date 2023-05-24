import Index from '../pages/index.page';
const homePage = new Index();

describe('Cambiar idiomas', () => {
  it('Debería cambiar el idioma', async () => {
    addStep('Cambia las opciones del dropdown de idiomas');
    await homePage.changeLanguageTo(2); //Para el inglés(0), francés(1), alemán(2)
  })

  it('Imprimir el idioma de la página', async () => {
    addStep('Imprime el idioma seleccionado');
    await homePage.printSelectedLanguageText();
  })

})