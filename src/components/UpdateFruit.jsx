
import { useForm } from 'react-hook-form'

import '../App.scss'


const Input = ({label,register, required})=>(
  <section className="field_input">
  <input {...register(label, {required}, { pattern:  /^[A-Za-z]+$/i })}/>
  </section>
  
)

const TextArea =({label, register, required})=>(
  <div >
    <textarea cols="30" rows="5" {...register(label, {required})}/>
  </div>
)

export default function UpdateFruit({ item }) {

  const {register, handleSubmit} =useForm();
  const onSubmit = data => console.log(data)

 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Update_field">
      <p>Scientific Name: {item.scientific_name}</p>
      <Input label="scientific_name" register={register}/>
      <p>Tree Name: {item.tree_name}</p>
      <Input label="tree_name" register={register}/>
      <p>Fruit Name: {item.fruit_name}</p>
      <Input label="fruit_name" register={register}/>
      <p>Family: {item.family} </p>
      <Input label="family" register={register}/>
      <p>Origin: {item.origin}</p>
      <Input label="origin" register={register}/>
      <p>Description: {item.description}</p>
      <TextArea label="description" register={register}/>
      <p>Bloom: {item.bloom}</p>
      <Input label="bloom" register={register}/>
      <p>Maturation Fruit:{item.maturation_fruit}</p>
      <Input label="maturation_fruit" register={register}/>
      <p>Life Cycle: {item.life_cycle}</p>
      <Input label="life_cycle" register={register}/>
      <input type="submit" className="button"/>
  </form>

  );
}
