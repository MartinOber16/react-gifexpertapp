import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem.js', () => {

    const id = "123";
    const title = "Titulo";
    const url = "http://prueba/123";
    const wrapper = shallow( <GifGridItem id={ id } title={ title } url={ url } /> );

    test('Debe mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    }); 

    test('Debe tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    }); 

    test('Debe tener la imagen igual al url y alt de los prop', () => {
        
        const img = wrapper.find('img');
        //console.log( img.props() );
        expect( img.prop( 'src' ) ).toBe( url );
        expect( img.prop( 'alt' ) ).toBe( title );
        
    }); 

    test('Debe tener la clase animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop( 'className');

        expect( className.includes('animate__fadeIn') ).toBe( true );
    })
    
    
});
