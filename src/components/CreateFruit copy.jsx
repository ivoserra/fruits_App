import { useMutation , useQuery} from '@apollo/client';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ADD_FRUIT, GET_FRUITS } from '../queries/queries';
import { Input } from './Input';
import Loader from './Loader';
import { MessageErrorComponent } from './MessageErrorComponent';



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


          <Input 
            label="scientific_name"
            errors={errors}
            register={register}
            name="Scientific Name" />

          <Input 
            label="tree_name"
            errors={errors}
            register={register}
            name="Tree Name" />

          <Input
            label="fruit_name"
            errors={errors}
            register={register}
            name="Fruit Name"/>
          
          <Input
            label="family"
            errors={errors}
            register={register}
            name="Family"/>

          <Input 
            label="origin"
            errors={errors}
            register={register}
            name="Origin"/>
          
          <Input
            label="description"
            errors={errors}
            register={register}
            name="Description"/>
          
          <Input 
            label="bloom"
            errors={errors}
            register={register}
            name="Bloom" />
          
          <Input 
            label="maturation_fruit"
            errors={errors}
            register={register}
            name="Maturation Fruit" />

          <Input
            label="life_cycle"
            errors={errors}
            register={register}
            name="Life Cycle"/>

          



          {/*  
        
    
           <Input label="Maturation Fruit" name="maturation_fruit" register={register}/>
           {errors.maturation_fruit && <InputError errors={errors} name="maturation_fruit"/>}
           <Input label="Life Cycle" name="life_cycle" register={register}/>
           {errors.life_cycle && <InputError errors={errors} name="life_cycle"/>}
           <Input label="Climatic Zone" name="climatic_zone" register={register}/>
           {errors.climatic_zone && <InputError errors={errors} name="climatic_zone"/>}
    */}
          <input type="submit" className="create__button"/> 

          
        </form>
      </section>
  
      </>
    )
  }