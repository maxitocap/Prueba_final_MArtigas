import Index from '../pages/index.page';
const homePage = new Index();

describe('Entrar a Madison Island', () => {
  it('Debería entrar a Madison Island', async () => {
    await browser.url('/')
    await homePage.toMyAccount()
    
    await $('#email').setValue('raceka1308@soombo.com')
    await $('#pass').setValue('RmHcJLs4YARCqAf')
    await $('#send2').click()
  })
})