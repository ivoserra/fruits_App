import { useMutation , useQuery} from '@apollo/client';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ADD_FRUIT, GET_FRUITS } from '../queries/queries';
import HomeButton from './HomeButton';
import Loader from './Loader';
import { MessageErrorComponent } from './MessageErrorComponent';



const Input =({label, name, register,})=>{

if( 
  label === 'scientific_name' || 
  label === 'tree_name' || 
  label === 'family' || 
  label === 'bloom'){

    return (
    <div className="create__input">
      <label>{label}</label>
      <input {...register(name, {required: true, pattern:/^[-/A-Za-z\u00C0-\u017F ]+$/})} />
     </div>
    )
  }

  return (
  <div className="create__input">
    <label>{label}</label>
    <input {...register(name, {required: true, pattern:/^[-/A-Za-z\u00C0-\u017F ]+$/})} />
  </div>
  )
  
}

const TextArea =({label, name, register,})=>(

  <div className="create__input">
    <label>{label}</label>
    <textarea cols="30" rows="5" {...register(name, {required : true, min: 2, max:2000 ,pattern: /^[ A-Za-z0-9_@./#&+-]*$/})}/>
  </div>
)

const InputError =({errors, name})=>{
  return (
    <div className="Error">
      {errors[name].type === 'required' && <p >This field is required</p>}
      {errors[name].type === 'pattern' && <p>Alphabetic characters only</p>}
  </div> 
 )
}


export default function CreateFruit(){

  const navigate =useNavigate();
  const { register, handleSubmit,formState: { errors } } = useForm();


    // graphql
    const { data } = useQuery(GET_FRUITS); 
    const [ addFruit,{ loading, error}] = useMutation(ADD_FRUIT, {
      refetchQueries: [{ query: GET_FRUITS}, 'GetFruits'],
      onCompleted: () => navigate('/')
    })
   

    // form
    
    const onSubmit = item => {
      item.id = String(data.fruits.length + 1)
      console.log(item)
      addFruit({ variables : { ...item }})
      console.log(data)
    }

    if(loading ) return <Loader/>
    if (error) return <MessageErrorComponent error={error}/>
    
    return(
      <>

    <section className="Create">
      <h1>Create a Fruit</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="create__inner" >
        
           <Input label="Scientific Name" name="scientific_name" register={register} errors={errors}/>
           { errors.scientific_name && <InputError errors={errors} name="scientific_name"/>}
           <Input label="Tree Name" name="tree_name" register={register}/>
           { errors.tree_name && <InputError errors={errors} name="tree_name"/>}
           <Input label="Fruit Name" name="fruit_name" register={register}/>
           { errors.fruit_name && <InputError errors={errors} name="fruit_name"/>}
           <Input label="Family" name="family" register={register}/>
           { errors.family && <InputError errors={errors} name="family"/>}
           <Input label="Origin" name="origin" register={register}/>
           { errors.origin && <InputError errors={errors} name="origin"/>}
           <TextArea label="Description" name="description" register={register}/>
           {errors.description && <InputError errors={errors} name="description"/>}
           <Input label="Bloom" name="bloom" register={register}/>
           {errors.bloom && <InputError errors={errors} name="bloom"/>}
           <Input label="Maturation Fruit" name="maturation_fruit" register={register}/>
           {errors.maturation_fruit && <InputError errors={errors} name="maturation_fruit"/>}
           <Input label="Life Cycle" name="life_cycle" register={register}/>
           {errors.life_cycle && <InputError errors={errors} name="life_cycle"/>}
           <Input label="Climatic Zone" name="climatic_zone" register={register}/>
           {errors.climatic_zone && <InputError errors={errors} name="climatic_zone"/>}

          <input type="submit" className="create__button"/> 

          
        </form>
      </section>
  
      </>
    )
  }