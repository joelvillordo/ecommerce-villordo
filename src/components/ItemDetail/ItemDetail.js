import React from 'react'


//Con la data recibida del ItemDetailContainer deberia mostrar el detalle del producto
const ItemDetail = ({data}) => {
    return (
        <div>
            {data.map((detail) => {
                return(
                    <h2>{detail.title}</h2>
                )})
            }
        </div>
    )
}

export default ItemDetail
