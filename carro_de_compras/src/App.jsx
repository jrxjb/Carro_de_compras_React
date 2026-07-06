import './App.css'
import Products from './components/products'
import {products as inicialProducts} from './mocks/products.json'
import {useState} from 'react'
import Header from './components/header.jsx'


function App() {
 const [products] = useState(inicialProducts)
 const [filters,setfilters]=useState({category:"all",minPrice:0})

const filtersProducts=(products)=>{
  return products.filter((product)=>{ 

   return product.price >= filters.minPrice &&( 
                                  filters.category=== 'all' || product.category === filters.category)
  })
//  filters.category=== 'all' para obtener un true  en esta condicion

}

const saberCategorias = (products)=>{
  return new Set(products.map( (product)=>{
    return product.category
  } ) )
}
console.log(saberCategorias(products))
  return (
    <>
      <section>
        <Header/>
        <Products products={filtersProducts(products)}/>
      </section>

    </>
  )
}

export default App
