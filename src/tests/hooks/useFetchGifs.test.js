// custom hook
// https://react-hooks-testing-library.com/
import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs.js', () => {
    
    test('Debe retornar el estado inicial', async () => {
        //const { data: images, loading } = useFetchGifs( 'Goku' ); 
        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs( 'Goku' ) );
        const { data, loading } = result.current;
        
        await waitForNextUpdate(); // promesa para el cambio del estado
        
        //console.log( data, loading );
        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    });
    
    test('Debe retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs( 'Goku' ) ); 
        await waitForNextUpdate(); // promesa para el cambio del estado
        
        const { data, loading } = result.current;
        
        //console.log( data, loading );
        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );

    });
    

});
