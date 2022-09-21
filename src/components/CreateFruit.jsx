import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form'
import { ADD_FRUIT } from '../queries/queries';
import HomeButton from './HomeButton';



const Input =({label, register, required})=>(
  <div className="Create_field">
    <label>{label}</label>
    <input {...register(label, {required}, {pattern : /^[A-Za-z]+$/i })}/>
  </div>
)

const TextArea =({label, register, required})=>(

  <div className="Create_field">
    <label>{label}</label>
    <textarea cols="30" rows="5" {...register(label, {required})}/>
  </div>
)


export default function CreateFruit(){

    // 
    const [ addFruit, { loading , error }] = useMutation(ADD_FRUIT)


    // form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => addFruit({ variables: { data } })
  
    return(
      <>
      <section className="header">
        <HomeButton/>
      </section>
    
      <h1>Create a Fruit</h1>
      <section className="Create">
        <form onSubmit={handleSubmit(onSubmit)} className="Create_Inputs">
           <Input label="scientific_name" register={register}/> 
           <Input label="tree_name" register={register}/>
           <Input label="fruit_name" register={register}/>
           <Input label="family" register={register}/>
           <Input label="origin" register={register}/>
           <TextArea label="description" register={register}/>
           <Input label="bloom" register={register}/>
           <Input label="maturation fruit" register={register}/>
           <Input label="climatic zone" register={register}/>
          <input type="submit" className="button"/> 
        </form>
        <img src="https://basket-01.wb.ru/vol129/part12947/12947069/images/big/1.jpg"></img>
      </section>
  
      </>
    )
  }