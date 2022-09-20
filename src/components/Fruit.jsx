import { useParams } from "react-router-dom"
import data from '../data/data'
import Field from "./Field";

export default function Fruit(){

    const { fruitId } = useParams();
    console.log(fruitId)
    const item  = data.fruits.find(item => item.id === fruitId)
    if(!item) return <p>Loading...</p>
    
    
    return(
        <div>
            <section>
                <Field name={item.fruit_name} category="Fruit Name" subject="fruit_name"/>
                <p onClick>Fruit Name: {item.fruit_name}</p>
                <p>Scientific Name: {item.scientific_name}</p>
                <p>Tree_Name : {item.tree_name}</p>
                <p>Family: {item.family}</p>
                <p>origin: {item.origin}</p>
                <p>description: {item.description}</p>
                <p>bloom: {item.bloom}</p>
            </section>

        </div>
       
      
    )
}