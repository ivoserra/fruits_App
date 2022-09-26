import { useMutation } from '@apollo/client'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../Context/UserContext'
import { UPDATE_FRUIT } from '../queries/queries'
import MessageComponent from './MessageErrorComponent'


const Input = ({label,register,errors })=>{

  if(
    label ==='scientific_name' || 
    label === 'tree_name' ||
    label === 'family'){
      return(
        <section className="update__input">
        <input {...register(label, {required:true, pattern:/^[-/A-Za-z\u00C0-\u017F ]+$/ , min:3})}/>
        {errors?.[label] && <InputError errors={errors} name={label}/>}
        </section>
      )
      // regex works for white spaces and dashes too
    }


  return(
    <section className="update__input">
    <input {...register(label, {required:true, min:3 , max: 50})}/>
    {errors?.[label] && <InputError errors={errors} name={label}/>}

    </section>
)
}

const TextArea =({label, register, errors } )=>(
  <div >
    <textarea cols="30" rows="5" {...register(label, {required : true, min: 20, max:2000 })}/>
    {errors?.[label] && <InputError errors={errors} name={label}/>}

  </div>
)

const InputError =({errors, name})=>{
  
  return (
    <div className="Error">
      {errors[name].type === 'required' && <p >This field is required</p>}
      {errors[name].type === 'pattern' && <p>Alphabetic characters only</p>}
      {errors[name].type ===  'min' && <p>Min 2 characters</p>}
    </div> 
  )
}





export default function UpdateFruit({ item }) {

  const { setEdit } = useContext(UserContext)
  
  // form  
  const { register, handleSubmit , formState:{errors}} =useForm({defaultValues: item});


  // graphql
  const [ updateFruit,{ loading, error, networkStatus} ] = useMutation(UPDATE_FRUIT , 
    {onCompleted: (result) =>{
      console.log('result',result)
    }},
    {refetchQueries: [{query: UPDATE_FRUIT}, 'Fruit']},
    
    )

  if ( networkStatus === 4 ) return 'Refetching!' 
  if (loading) return 'null'
  if (error) return <MessageComponent error={error}/>


  const onSubmit = fruit => {
    fruit.id = item.id
    updateFruit({ variables : {...fruit}})
    setEdit(false)
  }

 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="update__form">
      <section className="update__field">
        <h3>Scientific Name: </h3>
        <p>{item.scientific_name}</p>
        <Input label="scientific_name" errors={errors} register={register} defaultValue={item.scientific_name} />
      </section>

      <section className="update__field">
        <h3>Tree Name:</h3>
        <p>{item.tree_name}</p>
        <Input label="tree_name" register={register} errors={errors} defaultValue={item.tree_name}/>
      </section>

      <section className="update__field">
        <h3>Fruit Name: </h3>
        <p>{item.fruit_name}</p>
        <Input label="fruit_name" register={register} errors={errors} defaultValue={item.fruit_name}/>
      </section>

      <section className="update__field">
        <p>Family: {item.family} </p>
        <Input label="family" register={register} errors={errors} defaultValue={item.family}/>
      </section>

      <section className="update__field">
        <h3>Origin: </h3>
        <p>{item.origin}</p>
        <Input label="origin" register={register} errors={errors} defaultValue={item.origin}/>
        {errors.origin && <InputError errors={errors} name="origin"/>}
      </section>

      <section className="update__field">
        <h3>Description: </h3>
        <p>{item.description}</p>
        <TextArea label="description" register={register} errors={errors} defaultValue={item.description}/>
      </section>

      <section className="update__field">
        <h3>Bloom: </h3>
        <p>{item.bloom}</p>
        <Input label="bloom" register={register} errors={errors} defaultValue={item.bloom}/>
      </section>

      <section className="update__field">
        <h3>Maturation Fruit:</h3>
        <p>{item.maturation_fruit}</p>
        <Input label="maturation_fruit" register={register} errors={errors} defaultValue={item.maturation_fruit}/>
      </section>

      <section className="update__field">
        <h3>Life Cycle: </h3>
        <p>{item.life_cycle}</p>
        <Input label="life_cycle" register={register} errors={errors} defaultValue={item.life_cycle}/>
      </section>

      <section className="update__field">
        <h3>Climatic Zone:</h3>
        <p>{item.climatic_zone}</p>
        <Input label="climatic_zone" register={register} errors={errors} defaultValue={item.climatic_zone}/>
      </section>
      <input type="submit" className="button" />

    </form>
  );
}
