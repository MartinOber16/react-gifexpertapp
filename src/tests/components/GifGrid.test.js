import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); // Simular que mi customHook ya retorno la data

describe('Pruebas en GifGrid.js', () => {

    const category = 'Goku';
    
    test('Debe mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
    }); 
    
    test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Prueba 1',
                url: 'https://prueba.com/abc'
            },
            {
                id: '123',
                title: 'Prueba 2',
                url: 'https://prueba.com/123'
            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category } /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    
});
