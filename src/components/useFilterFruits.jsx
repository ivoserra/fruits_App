
import { useState } from 'react'

export function useFilterFruits(){

    const [ filter, setUpdateFilter ]=useState({family: undefined});

    const updateFilter = (filterType, value)=>{

        setUpdateFilter({
            [filterType] : String(value),
        })

        console.log(setUpdateFilter)
    }

  return { 
    models: { filter }, 
    operations: { updateFilter} , };
}
