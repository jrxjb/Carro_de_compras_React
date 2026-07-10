import { useContext } from "react"
import { FiltersContext } from "../context/Filters"


export default function useFilters(){


const {filters,setfilters} =useContext(FiltersContext)

const filtersProducts=(products)=>{
  return products.filter((product)=>{ 

   return product.price >= filters.minPrice &&( 
                                  filters.category=== 'all' || product.category === filters.category)
  })
//  filters.category=== 'all' para obtener un true  en esta condicion

}
return {filters,filtersProducts,setfilters}
}
