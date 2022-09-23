import { useMutation } from '@apollo/client'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../Context/UserContext'
import { UPDATE_FRUIT } from '../queries/queries'
import MessageComponent from './Error'


const Input = ({label,register, required})=>(
  <section className="update__input">
  <input {...register(label, {required})}/>
  </section>
  
)

const TextArea =({label, register, required} )=>(
  <div >
    <textarea cols="30" rows="5" {...register(label, {required})}/>
  </div>
)

export default function UpdateFruit({ item }) {

  const { setEdit } = useContext(UserContext)
  
  // form  
  const { register, handleSubmit } =useForm({defaultValues: item});


  // graphql
  const [ updateFruit,{ loading, error, networkStatus} ] = useMutation(UPDATE_FRUIT , 
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
        <Input label="scientific_name" register={register} defaultValue={item.scientific_name} />
      </section>

      <section className="update__field">
        <h3>Tree Name:</h3>
        <p>{item.tree_name}</p>
        <Input label="tree_name" register={register} />
      </section>

      <section className="update__field">
        <h3>Fruit Name: </h3>
        <p>{item.fruit_name}</p>
        <Input label="fruit_name" register={register} />
      </section>

      <section className="update__field">
        <p>Family: {item.family} </p>
        <Input label="family" register={register} />
      </section>

      <section className="update__field">
        <h3>Origin: </h3>
        <p>{item.origin}</p>
        <Input label="origin" register={register} />
      </section>

      <section className="update__field">
        <h3>Description: </h3>
        <p>{item.description}</p>
        <TextArea label="description" register={register} />
      </section>

      <section className="update__field">
        <h3>Bloom: </h3>
        <p>{item.bloom}</p>
        <Input label="bloom" register={register} />
      </section>

      <section className="update__field">
        <h3>Maturation Fruit:</h3>
        <p>{item.maturation_fruit}</p>
        <Input label="maturation_fruit" register={register} />
      </section>

      <section className="update__field">
        <h3>Life Cycle: </h3>
        <p>{item.life_cycle}</p>
        <Input label="life_cycle" register={register} />
      </section>

      <section className="update__field">
        <h3>Climatic Zone:</h3>
        <p>{item.climatic_zone}</p>
        <Input label="climatic_zone" register={register} />
        
      </section>
      <input type="submit" className="button" />

    </form>
  );
}
