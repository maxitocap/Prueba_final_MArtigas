describe('Cambiar idiomas', () => {
  it('Debería cambiar el idioma a francés', async () => {
    await browser.url('/')
    const dropDownLanguage = await $('#select-language')
    await dropDownLanguage.selectByIndex(1)
  })

  it('Verificar que la página está en francés', async () =>
  {
    const element = await $('select#select-language option[selected="selected"');
    const attr = element.getText().then(text => console.log("El idioma de la página es " + text));
  })

})