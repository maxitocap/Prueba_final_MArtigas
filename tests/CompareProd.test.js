import Index from '../pages/index.page';
import BusquedaPage from '../pages/busqueda.page'
const homePage = new Index();
const busquedaPage = new BusquedaPage()

describe('Compara dos productos', () => {
    
  it('Busca dos elementos y los agrega a la lista "Compare products"', async () => {
    addStep('Busca dos elementos y los agrega a la lista Compare'); 
    await busquedaPage.compare('glasses','cardigan')
    })

  
  it('Imprime los dos elementos en la lista para comparar', async () => {
    addStep('Toma el nombre de ambos productos en la lista');
    const text = await busquedaPage.primerProducto.getText();
    const text2 = await busquedaPage.segundoProducto.getText();
    addStep('Imprime ambos nombres');
    console.log('El primer producto es ' + text + ' y el segundo es ' + text2);
    })
})