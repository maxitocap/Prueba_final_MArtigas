import Index from '../pages/index.page';
import Account from '../pages/account.page'
import {assert} from 'chai';
//const homePage = new Index();

describe('Login', () => {
  it('Loguearse con credenciales válidas', async () => {
    addStep('Abrir el navegador en la página Madison Island');
    await browser.url('/')
    addStep('Ingresar a la página para loguearse');
    await new Index().toMyAccount()
    addStep('Loguearse con credenciales válidas');
    await new Account().login('raceka1308@soombo.com','RmHcJLs4YARCqAf')
    addStep('Chequear mensaje de bienvenida');
    await expect($('.hello')).toHaveTextContaining('Hello, ')
  })
})