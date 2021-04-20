import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs.js fetch', () => {
    
    test('Debe regresar 10 elementos', async () => {

        const gifs = await getGifs('Goku');
        expect( gifs.length ).toBe( 10 );
    });

    test('Debe regresar 0 elementos', async () => {

        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );
    });
    
});
