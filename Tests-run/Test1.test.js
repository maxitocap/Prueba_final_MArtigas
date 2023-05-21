import Index from '../pages/testing.page';

describe('Cambiar idiomas', () => {
  it('Debería cambiar el idioma a francés', async () => {
    const homePage = new Index();
    await homePage.changeLanguageToFrench();
  })

  it('Verificar el idioma de la página', async () =>
  {
    const element = await $('select#select-language option[selected="selected"');
    const attr = element.getText().then(text => console.log("El idioma de la página es " + text));
  })

})

