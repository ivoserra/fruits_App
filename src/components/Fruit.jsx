import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { FRUIT } from "../queries/queries";
import { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import {AiOutlineEdit} from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import Loader from "./Loader";

import UpdateFruit from "./UpdateFruit";
import MessageErrorComponent from "./MessageErrorComponent";
import { useEffect } from "react";






export default function Fruit(){

    const { edit, setEdit } = useContext(UserContext)

   

    // router
    const { fruitId } = useParams();
    // query 
    const { loading, error, data } = useQuery(FRUIT, { variables: {id : fruitId }});

  const[ fruit, setFruit]=useState({})
    
    console.log('data', data)

    useEffect(()=>{

        if(data && !loading){
            console.log(data)
            console.log(fruit)
            return setFruit(data.fruit)
            
        }
    },[data, loading])

    console.log('fruit after effect',fruit)
    console.log('data after effect', data)

    if (loading) return <Loader/>
    if (error) return  <MessageErrorComponent error={error}/>
    


    return(
        <>
        <section className="Container">
        <section className="container-header">
            <h1>{fruit.fruit_name}</h1>
             <button onClick={ (e) => setEdit(!edit)} className="update-button">
                { !edit ? <AiOutlineEdit/> : <MdCancel/>}
            </button> 
        </section>
            { !edit ? (
                <section key={fruit.id} className="container-text">
                    <ul>
                     {/*    {Object.keys(data.fruit).map((key) => {
                            if(typeof data.fruit[key] === 'object'){
                                return data.fruit[key].map((item) => <li key={item.country}>{item.country}</li>)
                            }
                            return <li key={key}><span>{key}:</span> {data.fruit[key]}</li>
                        })} */}
                        <li>
                            <h3>Scientific Name:</h3>
                            <p>{fruit.scientific_name ? fruit.scientific_name : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Tree Name:</h3>
                            <p>{fruit.tree_name ? fruit.tree_name : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Fruit Name:</h3>
                            <p>{fruit.fruit_name ? fruit.fruit_name : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Family:</h3>
                            <p>{fruit.family ? fruit.family : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Origin:</h3>
                            <p>{fruit.origin ? fruit.origin : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Description:</h3>
                            <p>{fruit.description ? fruit.description : 'n/a' }</p>
                        </li>
                        <li>
                            <h3>Bloom: </h3>
                            <p>{fruit.bloom ? fruit.bloom : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Maturation Fruit:</h3>
                            {/* <p>{data.fruit.maturation_fruit ? data.fruit.maturation_fruit : 'n/a'}</p> */}
                        </li>
                        <li>
                            <h3>Life Cycle</h3>
                            <p>{fruit.life_cycle ? fruit.life_cycle : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Countries</h3>
                            <section className="countries">
                            {fruit.producing_countries ? fruit.producing_countries.map(item => <p>{item.country}</p>): <p>n/a</p>}
                            </section>
                           
                        </li>
                    </ul>   
                </section>) 
                :
                (
                    <section className="container-text">
                        <UpdateFruit key={fruit.id} item={data.fruit} className="update__text" setFruit={setFruit}/>
                    </section>

                ) 
            }
        </section>
      </>
    )
}