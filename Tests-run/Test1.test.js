describe('Cambiar idiomas', () => {
  it('Debería cambiar el idioma a francés', async () => {
    await browser.url('/')
    const dropDownLanguage = await $('#select-language')
    await dropDownLanguage.selectByIndex(1)

    const element = await $('#select-language');
    const attr = element.getAttribute('title');

    console.log(attr)
  })

})