import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // Ejecuta solo cuando el componente es renderizado por primera vez
    useEffect( () => {
        getGifs( category )
            //.then( imgs => setImages( imgs ) );
            .then( imgs => {

                //setTimeout( () => {

                   //console.log(imgs)
                    setstate({
                        data: imgs,
                        loading: false
                    });

                //}, 2000 );

            } );
    }, [ category ]);


    return state; 
}
