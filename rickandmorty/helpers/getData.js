export const getData = async( url ) => {
    const respuesta = await fetch( url );
    const data = await respuesta.json();
    // console.log(data.results);
    return data?.results
}
