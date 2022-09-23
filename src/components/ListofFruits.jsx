import { Link } from "react-router-dom";
import CreateButton from "./CreateButton.jsx";
import HomeButton from "./HomeButton.jsx";
import { useQuery } from '@apollo/client';
import { GET_FRUITS } from "../queries/queries.js";
import Loader from "./Loader.jsx";
import MessageComponent from "./Error.jsx";
// import './ListofFruits.scss'

export default  function ListOfFruits(){

    const { loading, error, data } = useQuery(GET_FRUITS); 

    if (loading) return <Loader/>;
    if( error ) return <MessageComponent error={error}/>;
    console.log(data.fruits)
    
    

    return(
    <>
        <section className="header">
            <HomeButton className="button"/>
            <CreateButton className="button"/>
        </section>

        <section className="List">
            <h1>Fruits List</h1>
            <section className="list__inner">
                { data.fruits.map(({id, fruit_name}) => <Link key={id} to={`/fruit/${id}`} className="fruit"> {fruit_name} </Link>)}
            </section>
        </section>
        
    </>
    )
}