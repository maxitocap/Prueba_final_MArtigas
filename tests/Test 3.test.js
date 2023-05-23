import Index from '../pages/index.page';
import Account from '../pages/account.page'
const homePage = new Index();

describe('Iniciar sesión con credenciales válidas', () => {
  it('', async () => { 

    homePage.abrir('/')
    await Account.login('raceka1308@soombo.com', 'RmHcJLs4YARCqAf')
    await Account.check('Logueado con credenciales válidas')
  })
})