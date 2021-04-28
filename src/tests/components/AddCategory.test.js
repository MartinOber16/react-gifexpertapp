import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory'

describe('Pruebas en AddCategory.js', () => {
    
    const setCategories = jest.fn(); // () => {};
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks; // Para limpiar si hay una simulación de algo
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value ); 

    });

    test('NO debe postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';

        // 1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        // 3. setCategories debe haber sido llamado
        //expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);

        // 4. el valor del input debe ser ''
        expect( wrapper.find('input').prop( 'value' ) ).toBe( '' ); 

    })
    
    
    
    
});