import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContext.js";
import CreateButton from "./CreateButton.jsx";
import HomeButton from "./HomeButton.jsx";

import '../App.scss'

export default  function ListOfFruits(){

    const { api, setApi } = useContext(UserContext)


    return(
    <>
        <section className="header">
            <HomeButton className="button"/>
            <CreateButton className="button"/>
        </section>

        <h1>Fruits List</h1>
        <section className="List">
            { api.map(({id, fruit_name}) => <Link key={id} to={`/fruit/${id}`} className="fruit"> {fruit_name} </Link>)}
        </section>
        
    </>
    )
}