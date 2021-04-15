import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'HunterXHunter'] );
    //     //setCategories( cats => [ ...cats, 'HunterXHunter'] );
    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories } />
            
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                { 
                    categories.map( category =>  
                        // <li key={category} >{category}</li> 
                        <GifGrid 
                            category={ category } 
                            key={ category }
                        />
                    )
                }
            </ol>

        </>
    );
}

export default GifExpertApp;