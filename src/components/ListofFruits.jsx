import { Link } from "react-router-dom";
import { useLazyQuery, useQuery } from '@apollo/client';
import { FILTER_FRUIT_FAMILY, FILTER_FRUIT_ORIGIN, GET_FRUITS } from "../queries/queries.js";
import Loader from "./Loader.jsx";
import MessageErrorComponent from "./MessageErrorComponent.jsx";

import './ListofFruits.scss'

import { useState } from "react";
import { useEffect } from "react";


export default  function ListOfFruits(){
    

    const [ input, setInput ] = useState('')
    const [ optionFilter, setOptionFilter]= useState('')
    const [ refresh, setRefresh ] = useState(false) 

    const { data, loading, error } = useQuery(GET_FRUITS); 
    const [getFilterOrigin,{ data:filterOriData, loading:filterOriLoading, error:filterOriError, }] = useLazyQuery(FILTER_FRUIT_ORIGIN)
    const [getFilterFruits,{ data:filterData, loading:filterLoading, error:filterError,}] = useLazyQuery(FILTER_FRUIT_FAMILY)

   
    const [fruits, setFruits]= useState([])

    useEffect(()=>{
        if(data && !loading){
            console.log(data)
            return setFruits(data.fruits)
        }
       

    },[data, loading, refresh])

    useEffect(()=>{
        if(filterData && !filterLoading) {
            console.log(filterData)
            return setFruits(filterData.filterFruitsFam)
        }
        

    },[filterData, filterLoading])    
    
    useEffect(()=>{
        if(filterOriData && !filterOriLoading) {
            console.log(filterOriData)
            return setFruits(filterOriData.filterFruitsOri)
        }

    },[filterOriData,filterOriLoading])



    if (loading || filterLoading || filterOriLoading ) return <Loader/>;
    if( error || filterError || filterOriError ) return <MessageErrorComponent error={error}/>;    

    function ClearSearch(){
        setInput('')
        setOptionFilter('')
        setRefresh(!refresh)
      
        
    }

    function GetResult(e){
        e.preventDefault()
    
        if(optionFilter === 'origin') { 
           return getFilterOrigin({variables : {"origin": input }})
        } 

        if(optionFilter === 'family'){
            return getFilterFruits({variables : { "family" : input }})
           
        }

        return 

        }        
        
    


    return(
    <>
        <section className="List">
            <div className="List-search">
                <section className="list-search-input">
                    <select onChange={e => setOptionFilter(e.target.value)}>
                        <option >select</option>
                        <option value="family">family</option>
                        <option value="origin">origin</option>
                    </select>
                    <input  onChange={e => setInput(e.target.value)} type="string" placeholder="search"/>
                </section>
                <section className="list-search-btn">
                    <button onClick={(e) => GetResult(e)}>search</button>
                    <button onClick ={ClearSearch}>clear</button>
                </section>
              
            </div>
            {optionFilter ? <h1>Fruits List search on {optionFilter}</h1> : <h1>Fruits List</h1>}
            <section className="list__inner">

            {
                fruits.map.length > 0 ? fruits.map(({id, fruit_name}) => <Link key={fruit_name} to={`/fruit/${id}`} className="fruit"> {fruit_name} </Link>) : <p>No Results where found</p>
             }

            </section>

        </section>
        
    </>
    )
}