import './Filters.css'
import { useState, useId } from 'react'
import  useFilters from '../hooks/useFilters.jsx'

export default function Filters(){
    const [minPrice,setminPrince] = useState(0)
    const minPriceId = useId()
    const cathegoriesFiltersId = useId()
    
    const {filters,setfilters} = useFilters()

    const handleChangeMinPrice=(event)=>{
        setminPrince(event.target.value)
        setfilters((prevState) =>({
            ...prevState,minPrice:event.target.value
        }))
    }

    const handleChangeCathegories = (event)=>{
        setfilters((prevState)=>({
            ...prevState,category: event.target.value
        }))
    }
    
    return(
        <section className='filters'>
            <div>
                <label htmlFor={minPriceId}>Pricio apartir de: </label>
                <input type='range' id={minPriceId} min='0' max='1000' onChange={handleChangeMinPrice} value={filters.minPrice}/>
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={cathegoriesFiltersId}>Cathegories</label>
                <select id={cathegoriesFiltersId} onChange={handleChangeCathegories}>
                    <option value='all'>Todas</option>
                    <option value='beauty'>Beauty</option>
                    <option value='fragrances'>Fragrances</option>
                    <option value='furniture'>Furniture</option>
                    <option value='groceries'>Groceries</option>
                </select>
            </div>
        </section>
    )
}

//{'beauty', 'fragrances', 'furniture', 'groceries'}