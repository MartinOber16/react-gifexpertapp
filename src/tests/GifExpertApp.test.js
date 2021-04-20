import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en GifExpertApp.js', () => {
    
    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Categoria 1', 'Categoria 2', 'Categoria 3'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });

});
