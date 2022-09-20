import { useForm } from 'react-hook-form'

export default function CreateFruit(){

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    const onSubmit = data => console.log(data)
  
    return(
      <>
      <h1>Create a Fruit</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue= "scientific name" {...register("scientificName",{ required: true })} />  
  
      </form>
      </>
    )
  }