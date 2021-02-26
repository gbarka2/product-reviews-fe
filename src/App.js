
import './App.css';
import React, {useState, useEffect} from 'react'
import Product from './Product'
import {Route, Link, Switch} from 'react-router-dom'
import Review from './Review'
import CreateForm from './CreateForm';

function App() {

  const [data, setData] = useState()
  const [reviews, setReviews] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3000/products")
        const json = await res.json()
        setData(json)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    console.log('data', data)
  }, [])

  const getReviews = async (product) => {
    try {
      const res = await fetch("http://localhost:3000/products/" + product + "/reviews")
      const json = await res.json()
      setReviews(json)
    } catch (error) {
      console.log(error)
    }
  }

  const createReview = (product) => {
    // fetch("http://localhost:3000/products/" + product + "/reviews"), {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // }
    // .then(() => {
    //   getReviews()
    // })
  }

  return (
    <div className="App">
      <h1>Products</h1>
      <main>
        <Switch>
          <Route
            exact
            path='/'
            render={(rp) => <Product {...rp} products={data} handleClick={getReviews} />}
          />
          <Route
            path='/create'
            render={(rp) => (
              <CreateForm {...rp} reviews={reviews} handleSubmit={createReview} />
            )}
          />
          <Route
            path='/edit'
            // render
          />
          <Route 
            path='/review'
            render={(rp) => <Review {...rp} reviews={reviews} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
