import React, { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


//Aca deberia recibir la data desde el id donde se hace click para pasarla al ItemDetail
const ItemDetailContainer = ( {match} ) => {
    //Tomo el id del item clickeado
    let item = match.params.id;

    const [product, setProduct] = useState([]);

    useEffect(() =>{
        fetch('https://mocki.io/v1/5bc0c201-51b3-4d3c-8eac-088c90dabcaf')
        .then((res) => res.json())
        .then((res)=>setProduct(res));
    }, [])

    return (
        <div>
            <h2>Hola soy la pagina donde estan los detalles del producto</h2>
            <ItemDetail data={product[item]}/>
        </div>
    )
}

export default ItemDetailContainer
