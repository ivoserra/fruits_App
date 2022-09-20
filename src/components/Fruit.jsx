import { useContext } from "react";
import { useParams } from "react-router-dom"
import { UserContext } from "../Context/UserContext";
import { useForm } from 'react-hook-form'; 

import CreateButton from "./CreateButton";
import Field from "./Field";
import HomeButton from "./HomeButton";

export default function Fruit(){

    const { api, setApi } =useContext(UserContext)

    const { handleSubmit } = useForm()
    
    const onSubmit = data => console.log(data)

    const { fruitId } = useParams();
    const item  = api.find(item => item.id === fruitId)

    if(!item) return <p>Loading...</p>
    
    
    return(
        <>
        <section className="header">
            <HomeButton/>
            <CreateButton/>
        </section>


        <h1 >{item.fruit_name}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field name={item.scientific_name} category="Scientific Name" subject="scientific_name" item={item}/>
                <Field name={item.tree_name} category="Tree Name" subject="tree_name"/>
                <Field name={item.fruit_name} category="Fruit Name" subject="fruit_name"/>
                <Field name={item.family} category="Family" subject="family"/>
                <Field name={item.origin} category="Origin" subject="origin"/>
                <Field name={item.description} category="Description" subject="description"/>
                <Field name={item.bloom} category="Bloom" subject="bloom"/>
                <Field name={item.maturation_fruit} category="Maturation Fruit" subject="maturation_fruit"/>
                <Field name={item.life_cycle} category="Life Cycle" subject="life_cycle"/>
                <input type="submit"/>
            </form>

        </>
       
      
    )
}