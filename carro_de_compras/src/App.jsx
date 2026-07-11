import './App.css'
import Products from './components/products'
import {products as inicialProducts} from './mocks/products.json'
import {useContext, useState} from 'react'
import Header from './components/header.jsx'
import Footer  from './components/Footer.jsx'
import useFilters from './hooks/useFilters.jsx'
import Cart from './components/Cart.jsx'




function App() {
 const [products] = useState(inicialProducts)

 const {filtersProducts,setfilters} = useFilters(products)

  return (
    <>
      <section className='app'>
        <Header  />
        <Cart/>
        <Products products={filtersProducts(products)}/>
        <Footer/>
      </section>

    </>
  )
}

export default App
