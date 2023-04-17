import './ItemDetail.css'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, title, img, category, description, price, stock}) => {
  return (
    <article className='CardItemDetail'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {title}
            </h2>
        </header>
        <picture>
            <img src={img} alt={title} className='ItemImg'/>
        </picture>
        <section>
            <p className='Info'>
                Categoria: {category}
            </p>
            <p className='Info'>
                Descripcion: {description}
            </p>
            <p className='Info'>
                Precio: ${price}
            </p>
        </section>
        <footer className='ItemFooter'>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
        </footer>

    </article>
  )
}

export default ItemDetail