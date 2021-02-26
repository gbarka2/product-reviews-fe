import React from 'react'
import {Link} from 'react-router-dom'

const Review = ({reviews}) => {

  console.log('reviews props', reviews)
  return (
    <div>
      {
        reviews !== undefined ?
        reviews.map((review, index) => {
          return ( 
          <div>
            <h3>{review.title}</h3>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </div>
          )
        })
        : "No Reviews At This Time"
      }
      <Link to='/'>
        <button>To Main</button>
      </Link>
      <Link to='/create'>
        <button>Create Review</button>
      </Link>
    </div>
  )

}

export default Review