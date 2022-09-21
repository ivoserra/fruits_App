import { useState } from 'react'
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"

import { FRUIT } from "../queries/queries";


import CreateButton from "./CreateButton";
import HomeButton from "./HomeButton";
import UpdateFruit from "./UpdateFruit";



export default function Fruit(){

    // const { api, setApi } =useContext(UserContext)
    const [edit, setEdit] = useState(false);

    // router
    const { fruitId } = useParams();
    console.log('params',fruitId)
    //const item  = api.find(item => item.id === fruitId) 

    const { loading, error, data } = useQuery(FRUIT, { variables: {id : fruitId }});
    
   // console.log('FRUIT', data.fruit)

    if (loading) return <p>Loadinnng....</p>
    if (error) return <p>` Ups.. ${error.message}`</p>




    return(
        <>
        <div>
        <section className="header">
            <HomeButton/>
            <CreateButton/>
        </section>

        <section>
             <button onClick={ (e) => setEdit(!edit)} className="button-edit">
                { !edit ? "Edit" : "Cancel" }
            </button> 
        </section>

        <h1 >{data.fruit.fruit_name}</h1>
        </div>

        <section>
            { !edit ? (
                <section key={data.fruit.id}>
                    <p>Scientific Name: {data.fruit.scientific_name}</p>
                    <p>Tree Name: {data.fruit.tree_name}</p>
                    <p>Fruit Name: {data.fruit.fruit_name}</p>
                    <p>Family: {data.fruit.family} </p>
                    <p>Origin: {data.origin}</p>
                    <p>Description: {data.fruit.description}</p>
                    <p>Bloom: {data.fruit.bloom}</p>
                    <p>Maturation Fruit:{data.fruit.maturation_fruit}</p>
                    <p>Life Cycle: {data.fruit.life_cycle}</p>
                    <p>Countries</p>
                   { data.fruit.producing_countries.map(item => <p>{item.country}</p>)}
                </section>) 
                :
                (
                    <section>
                        <UpdateFruit key={data.fruit.id} item={data.fruit}/>
                    </section>

                ) 
            }
        </section>
      </>
    )
}