import React from 'react'
import {Link} from 'react-router-dom'
import Review from './Review'

const Product = ({products, handleClick, reviews}) => {


  console.log('product props', products)
  return (
    <div>
      {
        products !== undefined ?
        products.map((product, index) => {
          return (
            <article>
              <h1>{product.name}</h1>
              <Link to='/review'>
                <img src={product.img} onClick={() => handleClick(product.id)} />
              </Link>
            </article>
          )
        })
        : <h1>Loading... </h1>
      }
    </div>
  )
}

export default Product