import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { FRUIT } from "../queries/queries";
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import {AiOutlineEdit} from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import Loader from "./Loader";
import CreateButton from "./CreateButton";
import HomeButton from "./HomeButton";
import UpdateFruit from "./UpdateFruit";
import MessageErrorComponent from "./MessageErrorComponent";
import { Header } from "./Header";



export default function Fruit(){

    const { edit, setEdit } = useContext(UserContext)

    // router
    const { fruitId } = useParams();
    
    

    const { loading, error, data } = useQuery(FRUIT, { variables: {id : fruitId }});
    
    if (loading) return <Loader/>
    if (error) return <MessageErrorComponent error={error}/>



    return(
        <>
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
                     {/*    {Object.keys(data.fruit).map((key) => {
                            if(typeof data.fruit[key] === 'object'){
                                return data.fruit[key].map((item) => <li key={item.country}>{item.country}</li>)
                            }
                            return <li key={key}><span>{key}:</span> {data.fruit[key]}</li>
                        })} */}
                        <li>
                            <h3>Scientific Name:</h3>
                            <p>{data.fruit.scientific_name ? data.fruit.scientific_name : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Tree Name:</h3>
                            <p>{data.fruit.tree_name ? data.fruit.tree_name : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Fruit Name:</h3>
                            <p>{data.fruit.fruit_name ? data.fruit.fruit_name : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Family:</h3>
                            <p>{data.fruit.family ? data.fruit.family : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Origin:</h3>
                            <p>{data.fruit.origin ? data.fruit.origin : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Description:</h3>
                            <p>{data.fruit.description ? data.fruit.description : 'n/a' }</p>
                        </li>
                        <li>
                            <h3>Bloom: </h3>
                            <p>{data.fruit.bloom ? data.fruit.bloom : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Maturation Fruit:</h3>
                            <p>{data.fruit.maturation_fruit ? data.fruit.maturation_fruit : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Life Cycle</h3>
                            <p>{data.fruit.life_cycle ? data.fruit.life_cycle : 'n/a'}</p>
                        </li>
                        <li>
                            <h3>Countries</h3>
                            <section className="countries">
                            { data.fruit.producing_countries ? data.fruit.producing_countries.map(item => <p>{item.country}</p>): <p>n/a</p>}
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