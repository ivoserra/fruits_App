import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ADD_FRUIT, GET_FRUITS } from "../queries/queries";
import { Input } from "./Input";
import Loader from "./Loader";
import { MessageErrorComponent } from "./MessageErrorComponent";
import Validate from "./Validate";



export default function CreateFruit() {

  const [isSuccessful, setIsSuccessful] = useState(false)

  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();



  // graphql
  const { data } = useQuery(GET_FRUITS);
  const [addFruit, { loading, error }] = useMutation(ADD_FRUIT, {
    refetchQueries: [{ query: GET_FRUITS }, "GetFruits"],
    onCompleted:()=> setIsSuccessful(true),
      
      
    
  });

  // form
  const onSubmit = (item) => {
    item.id = String(data.fruits.length + 1);
    addFruit({ variables: { ...item } });
    reset();
    
  };

  if (loading) return <Loader />;
  if (error) return <MessageErrorComponent error={error} />;

  return (

      <div className="Container">
        <section className="container-header">
          <h1>Create a Fruit</h1>
        </section>
   
        <div className="container-text">
        <form onSubmit={handleSubmit(onSubmit)} className="container-form">

          <section className="container_form_field">
          <Input
            name="scientific_name"
            label="Scientific Name"
            register={register}
            errors={errors}
          />
          </section>
          
          <section className="container_form_field">
          <Input
            name="tree_name"
            label="Tree Name"
            register={register}
            errors={errors}
          />
          </section>

          <section className="container_form_field">
          <Input
            name="fruit_name"
            label="Fruit Name"
            register={register}
            errors={errors}
          />
          </section>

          <section className="container_form_field">
          <Input
            name="family"
            label="family"
            register={register}
            errors={errors}
          />
          </section>

          <section className="container_form_field">
          <Input
            name="origin"
            label="Origin"
            register={register}
            errors={errors}
          />
          </section>

          <section className="container_form_field">
          <Input
            name="description"
            label="Description"
            register={register}
            errors={errors}
          />
          </section>

          <section className="container_form_field">
          <Input
            name="bloom"
            label="Bloom"
            register={register}
            errors={errors}
          />
          </section>

          <section className="container_form_field">
          <Input
            name="maturation_fruit"
            label="Maturation Fruit"
            register={register}
            errors={errors}
          />
          </section>

          <section className="container_form_field">
          <Input
            name="life_cycle"
            label="Life Cycle"
            register={register}
            errors={errors}
          />
          </section>
          <section className="container_form_field">
          <Input
            name="climatic_zone"
            label="Climatic Zone"
            register={register}
            errors={errors}
          />
          </section>
          { isSuccessful ?  <Validate setIsSuccessful={setIsSuccessful}/> 
          :
          <input type="submit" className="create__button"/> 
          }
        </form>
        </div>
      </div>
    
  );
}
