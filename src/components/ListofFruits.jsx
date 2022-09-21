import { Link } from "react-router-dom";
import CreateButton from "./CreateButton.jsx";
import HomeButton from "./HomeButton.jsx";
import { useQuery } from '@apollo/client';
import { GET_FRUITS } from "../queries/queries.js";
import '../App.scss'

export default  function ListOfFruits(){

    const { loading, error, data } = useQuery(GET_FRUITS); 

    if (loading) return <p>Loading... </p>;
    if( error ) return `Ups ... ${error.message}`;

    return(
    <>
        <section className="header">
            <HomeButton className="button"/>
            <CreateButton className="button"/>
        </section>

        <h1>Fruits List</h1>
        <section className="List">
            { data.fruits.map(({id, fruit_name}) => <Link key={id} to={`/fruit/${id}`} className="fruit"> {fruit_name} </Link>)}
        </section>
        
    </>
    )
}