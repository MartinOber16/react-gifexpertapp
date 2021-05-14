import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );

        console.log('handleInputChange llamado');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2) {
            //props.setCategories( cats => [ ...cats, inputValue] );
            setCategories( cats => [ inputValue, ...cats] ); // Para ordenar en forma inversa
            setInputValue('');
            console.log('Submit hecho');
        }

    }

    return (
        <form onSubmit={ handleSubmit } >
            <p>{ inputValue }</p>
           <input 
                onChange={ handleInputChange }
                type="text"
                value={ inputValue }
           />
        </ form>
    )
}

// La funcion es obligatoria
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
