import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"

import { FRUIT } from "../queries/queries";
import CreateButton from "./CreateButton";
import HomeButton from "./HomeButton";
import UpdateFruit from "./UpdateFruit";
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

import {AiOutlineEdit} from 'react-icons/ai'
import {MdCancel} from 'react-icons/md'



export default function Fruit(){

    const { edit, setEdit } = useContext(UserContext)

    // router
    const { fruitId } = useParams();
    
    

    const { loading, error, data } = useQuery(FRUIT, { variables: {id : fruitId }});
    
    if (loading) return <p>Loading....</p>
    if (error) return <p>` Ups.. ${error.message}`</p>


    console.log(data.fruit)

    return(
        <>
       
        <section className="header">
            <HomeButton/>
            <CreateButton/>
        </section>
        

        <section className="Update">
        <section className="update__header">
        <h1 >{data.fruit.fruit_name}</h1>
             <button onClick={ (e) => setEdit(!edit)} className="update__button">
                { !edit ? <AiOutlineEdit/> : <MdCancel/>}
            </button> 
        </section>
            { !edit ? (
                <section key={data.fruit.id} className="update__text">
                    <ul>
                        <li>
                            <h3>Scientific Name:</h3>
                            <p>{data.fruit.scientific_name}</p>
                        </li>
                        <li>
                            <h3>Tree Name:</h3>
                            <p>{data.fruit.tree_name}</p>
                        </li>
                        <li>
                            <h3>Fruit Name:</h3>
                            <p>{data.fruit.fruit_name}</p>
                        </li>
                        <li>
                            <h3>Family:</h3>
                            <p>{data.fruit.family}</p>
                        </li>
                        <li>
                            <h3>Origin:</h3>
                            <p>{data.fruit.origin}</p>
                        </li>
                        <li>
                            <h3>Description:</h3>
                            <p>{data.fruit.description}</p>
                        </li>
                        <li>
                            <h3>Bloom: </h3>
                            <p>Bloom: {data.fruit.bloom}</p>
                        </li>
                        <li>
                            <h3>Maturation Fruit:</h3>
                            <p>{data.fruit.maturation_fruit}</p>
                        </li>
                        <li>
                            <h3>Life Cycle</h3>
                            <p>{data.fruit.life_cycle}</p>
                        </li>
                        <li>
                            <h3>Countries</h3>
                            <section className="countries">
                            { data.fruit.producing_countries.map(item => <p>{item.country}</p>)}
                            </section>
                           
                        </li>
                    </ul>   
                </section>) 
                :
                (
                    <section className="update__text">
                        <UpdateFruit key={data.fruit.id} item={data.fruit} setEdit={setEdit} className="update__text"/>
                    </section>

                ) 
            }
        </section>
      </>
    )
}