import './App.css'
import Products from './components/products'
import {products} from './mocks/products.json'

function App() {
 
  return (
    <>
      <section>
        <Products products={products}/>
      </section>

    </>
  )
}

export default App
