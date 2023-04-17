import './ItemListContainer.css'
import { useState, useEffect, Fragment } from 'react'
import { getProducts, getProductById, getProductByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  const {categoryId} = useParams()
 
 /*  useEffect(() =>{
    getProducts()
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, []) */
 useEffect(() =>{
  const asyncFunc = categoryId ? getProductByCategory : getProducts

  asyncFunc(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
 }, [categoryId])
 
 return (
    <Fragment>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </Fragment>
  )
}

export default ItemListContainer