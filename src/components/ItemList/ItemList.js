import React, { useEffect, useState }from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import { products } from './products';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
          setItems(products);
          console.log(items);
        }, 2000);
      });   

    return (
        <div className="ItemList">
            {items.map((item,index) =>{
                return(
                    <Item 
                    title={item.title} 
                    description={item.description} 
                    price={item.price} 
                    pictureUrl={item.pictureUrl}/>
                )
            })};
        </div>
    )
}

export default ItemList
