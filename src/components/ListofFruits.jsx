import { Link } from "react-router-dom";
import { useLazyQuery, useQuery } from '@apollo/client';
import { FILTER_FRUIT_FAMILY, FILTER_FRUIT_ORIGIN, GET_FRUITS } from "../queries/queries.js";
import Loader from "./Loader.jsx";
import MessageErrorComponent from "./MessageErrorComponent.jsx";

import './ListofFruits.scss'

import { useState } from "react";
import { useEffect } from "react";
import { clear } from "@testing-library/user-event/dist/clear.js";

export default  function ListOfFruits(){
    
    const [ searchResult, setSearchResult] = useState(undefined)
    const [ optionFilter, setOptionFilter]= useState(null)
    const [ refresh, setRefresh ] = useState(false) 
    const [ isSearchActive, setIsSearchActive] =useState(false)
    
    const { data, loading, error, refetch } = useQuery(GET_FRUITS); 
    const [GetFilterOrigin,{ data:filterOriData, loading:filterOriLoading, error:filterOriError, refetch:fetchFilterOri}] = useLazyQuery(FILTER_FRUIT_ORIGIN,{ variables: searchResult })
    const [GetFilterFruits,{ data:filterData, loading:filterLoading, error:filterError, refetch:fetchFilter}] = useLazyQuery(FILTER_FRUIT_FAMILY,{ variables : searchResult} )

   
    const [fruits, setFruits]= useState([])

    useEffect(()=>{
        if(data && !loading){
            return setFruits(data.fruits)
        }
       

    },[data, loading, refresh])

    useEffect(()=>{
        if(filterData && !filterLoading) {
            return setFruits(filterData.filterFruitsFam)
        }
        

    },[filterData, filterLoading])

    useEffect(()=>{
        if(filterOriData && !filterOriLoading) {
            return setFruits(filterOriData.filterFruitsOri)
        }

    },[filterOriData,filterOriLoading])



    if (loading || filterLoading || filterOriLoading ) return <Loader/>;
    if( error || filterError || filterOriError ) return <MessageErrorComponent error={error}/>;    

    function ClearSearch(){
        setSearchResult("")
        setOptionFilter(undefined)
        setRefresh(!refresh)
        setIsSearchActive(false)
        refetch()
    }

    function GetResult(){
        console.log('functionFilter', searchResult)
        if(optionFilter === "origin" && searchResult !== undefined) { 
            fetchFilterOri({searchResult})
        } else if(optionFilter === "family" && searchResult !== undefined) {
             fetchFilter({searchResult})
        
        } else return        
        
    }

    console.log(data)
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
                    <input name={optionFilter} onChange={e => setSearchResult({[e.target.name] : e.target.value})} type="string" placeholder="search"/>
                </section>
                <section className="list-search-btn">
                    <button onClick={GetResult}>search</button>
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