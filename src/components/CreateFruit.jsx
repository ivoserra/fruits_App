import { useMutation , useQuery} from '@apollo/client';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ADD_FRUIT, GET_FRUITS } from '../queries/queries';
import HomeButton from './HomeButton';



const Input =({label, name, register, required})=>(
  <div className="create__input">
    <label>{label}</label>
    <input {...register(name, {required} )}/>
  </div>
)

const TextArea =({label, name, register, required})=>(
  <div className="create__input">
    <label>{label}</label>
    <textarea cols="30" rows="5" {...register(name, {required})}/>
  </div>
)


export default function CreateFruit(){

  const navigate =useNavigate();

    // graphql
    const { data } = useQuery(GET_FRUITS); 
    const [ addFruit] = useMutation(ADD_FRUIT, {
      refetchQueries: [{ query: GET_FRUITS}, 'GetFruits']
    })
   


    // form
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = item => {
      item.id = String(data.fruits.length + 1)
      console.log(item)
      addFruit({ variables : { ...item }})
      navigate('/')
    }

    
    return(
      <>
      <section className="header">
        <HomeButton/>
      </section>
    
    <section className="Create">
      <h1>Create a Fruit</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="create__inner" >
           <Input label="Scientific Name" name="scientific_name" register={register}/>
           <Input label="Tree Name" name="tree_name" register={register}/>
           {errors.tree_name && "field is required"}
           <Input label="Fruit Name" name="fruit_name" register={register}/>
           {errors.fruit_name && "field is required"}
           <Input label="Family" name="family" register={register}/>
           {errors.family && "field is required"}
           <Input label="Origin" name="origin" register={register}/>
           {errors.origin && "field is required"}
           <TextArea label="Description" name="description" register={register}/>
           {errors.description && "field is required"}
           <Input label="Bloom" name="bloom" register={register}/>
           {errors.bloom && "field is required"}
           <Input label="Maturation Fruit" name="maturation_fruit" register={register}/>
           {errors.maturation_fruit && "field is required"}
           <Input label="Life Cycle" name="life_cycle" register={register}/>
           {errors.life_cycle && "field is required"}
           <Input label="Climatic Zone" name="climatic_zone" register={register}/>
           {errors.climatic_zone && "field is required"}
          <input type="submit" className="create__button"/> 
        </form>
      </section>
  
      </>
    )
  }