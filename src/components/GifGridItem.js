import React from 'react'
import PropTypes from 'prop-types'; // impt

export const GifGridItem = ( {id, title, url} ) => {

    //console.log( id, title, url );
    return (
        <div className='card animate__animated animate__fadeIn' >
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}

GifGridItem.proptypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
