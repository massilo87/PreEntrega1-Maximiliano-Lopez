import './Item.css'

const Item = ({id, title, img, price, stock}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={img} alt={title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <link to={`/item/${id}`} className='Option'>Ver Detalle</link>
            </footer>
        </article>
    )
}

export default Item