import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState (initial);

  const increment = () => {
    if (quantity < stock){
        setQuantity(quantity+1)
    }
  };

  const decrement = () => {
    if (quantity > 1){
      setQuantity(quantity - 1)
    }
  };

  return (
    <div className='Counter'>
      <div className='Controls'>
          <button className='Button' onClick={decrement}>-</button>
          <h3 className='Number'>{quantity}</h3>        
          <button className='Button' onClick={increment}>+</button>        
      </div>
      <div>
        <button className='ButtonAdd' onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
};

export default ItemCount;


//<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}> IMPORTACION DEL COMPONENTE CON PROPS