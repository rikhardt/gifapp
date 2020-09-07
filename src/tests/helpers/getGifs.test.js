import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs y Fetch', () => {
    
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('The Beatles');

        expect(gifs.length).toBe(10);

    })
    

})
