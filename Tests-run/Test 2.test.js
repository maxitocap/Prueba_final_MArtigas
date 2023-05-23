import Index from '../pages/index.page';
import BusquedaPage from '../pages/busqueda.page'
const homePage = new Index();
const busquedaPage = new BusquedaPage()

describe('Compara dos productos', () => {

  it('Busca dos elementos y los agrega a la lista "Compare products"', async () => {
   
    await busquedaPage.compare('glasses','cardigan')
    })

  
  it('Imprime los dos elementos en la lista para comparar', async () => {
    
    const primerProducto = await $('p.product-name');
    const text = await primerProducto.getText();

    const segundoProducto = await $$('p.product-name')[1];
    const text2 = await segundoProducto.getText();

    console.log('El primer producto es ' + text + ' y el segundo es ' + text2);
    })
})