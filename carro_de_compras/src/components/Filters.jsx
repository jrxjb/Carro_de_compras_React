import './Filters.css'
import { useState } from 'react'
export default function Filters({setfilters}){
    const [minPrice,setminPrince] = useState(0)

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
                <label htmlFor='price'>Pricio apartir de: </label>
                <input type='range' id='price' min='0' max='1000' onChange={handleChangeMinPrice}/>
                <span>{minPrice}</span>
            </div>
            <div>
                <label htmlFor='cathegories'>Cathegories</label>
                <select id='cathegories' onChange={handleChangeCathegories}>
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