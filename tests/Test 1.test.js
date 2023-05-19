describe('Cambiar idiomas', () => {
  it('Debería cambiar el idioma primero a francés, luego a alemán y por último a inglés', async () => {
    const dropDownLanguage = await $('#select-language')
    await dropDownLanguage.selectByIndex(1)
    await dropDownLanguage.selectByIndex(2)
    await dropDownLanguage.selectByIndex(0)
  )})