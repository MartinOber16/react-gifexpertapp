// https://developers.giphy.com/docs/api/endpoint#search

//import React, { useEffect, useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'; // impt
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category }) => {

    //const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs( category ); // custom hook

    // Ejecuta solo cuando el componente es renderizado por primera vez
    // useEffect( () => {
    //     getGifs( category )
    //         //.then( imgs => setImages( imgs ) );
    //         .then( setImages );
    // }, [ category ]);

    // const getGifs = async () => {

    //     const apiURL = 'api.giphy.com/v1/gifs/search';
    //     const apiKey = 'biO7zC5kO4A2lkJDRxWBoyPG0rNWhFHJ';
    //     const apiLimit = 10;
    //     const apiQuery = encodeURI( category );

    //     const url = `https://${apiURL}?q=${apiQuery}&limit=${apiLimit}&api_key=${apiKey}`;
    //     const resp = await fetch( url );
    //     const { data } = await resp.json();
    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url // el ? es por si no viene nada
    //         }
    //     })

    //     //console.log( gifs );
    //     setImages( gifs );

    // }

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" > { category } </h3>

            { loading && <p className="animate__animated animate__flash" >Loading</p> }

            <div className="card-grid" >
                {/* <ol> */}
                    { 
                        // images.map( imagen =>  <li key={imagen.id} >{imagen.title} </li> )
                        images.map( 
                            //( {id, title } ) => {
                            ( img ) => {
                                //return <li key={id} > {title} </li>
                            return <GifGridItem 
                                    key={img.id} 
                                    // img={img}
                                    { ...img } // envio cada una de las propiedades de img como independientes
                                />
                            } 
                        )
                    }
                {/* </ol> */}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}