
export const getGifs = async ( category ) => {

    const apiURL = 'api.giphy.com/v1/gifs/search';
    const apiKey = 'biO7zC5kO4A2lkJDRxWBoyPG0rNWhFHJ';
    const apiLimit = 10;
    const apiQuery = encodeURI( category );

    const url = `http://${apiURL}?q=${apiQuery}&limit=${apiLimit}&api_key=${apiKey}`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // el ? es por si no viene nada
        }
    })

    //console.log( gifs );
    return gifs;

}