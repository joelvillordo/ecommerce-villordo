import React, { useState, useEffect}from 'react';
import './ItemListContainer';
import ItemList from '../ItemList/ItemList';
import Container from '@material-ui/core/Container';


function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);
//Api con productos de categoria Pc
    useEffect(() => {
        fetch('https://mocki.io/v1/5bc0c201-51b3-4d3c-8eac-088c90dabcaf')
        .then((res) => res.json())
        .then((res) => setProducts(res));
      }, []);

    return (
        <Container>
            <ItemList data={products}/>
        </Container>
    )
}

export default ItemListContainer
