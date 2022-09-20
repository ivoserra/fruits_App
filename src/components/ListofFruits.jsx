import { Link, Outlet } from "react-router-dom";
import data from '../data/data.js'


export default  function ListOfFruits(){

    const api = data.fruits
    console.log(api)


    return(
    <section>
        <h2>Fruits list</h2>
         { api.map(({id, fruit_name}) => <Link key={id} to={`/fruit/${id}`} > {fruit_name} </Link>)}

         <Outlet/>
    </section>
    )
}