import { createContext,useState } from 'react'

//Crear el context

export const FiltersContext = createContext()

// 2 Crear el provider

export function FiltersProvider({children}){
     const [filters,setfilters]=useState({category:"all",minPrice:0})
    return(
        <FiltersContext.Provider value={{
          filters,setfilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}