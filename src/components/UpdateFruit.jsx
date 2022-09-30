import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../Context/UserContext";
import { FRUIT, GET_FRUITS, UPDATE_FRUIT } from "../queries/queries";
import { Input } from "./Input";
import Loader from "./Loader";
import MessageComponent from "./MessageErrorComponent";


export default function UpdateFruit({ item, setFruit }) {
  // toggle editor
  const { setEdit } = useContext(UserContext);

  // react form  hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: item });

  // graphql
  const [updateFruit, { loading, error , refetch }] = useMutation(
    UPDATE_FRUIT,

    { refetchQueries: [{ query: GET_FRUITS }, "GetFruits"],
      onCompleted: (result) => { 
        console.log(result)
        setFruit(result.updateFruit)
      },
    },
   
  );

  if (loading) return <Loader />;
  if (error) return <MessageComponent error={error} />;

  const onSubmit = (fruit) => {
    fruit.id = item.id
    updateFruit({ variables: { ...fruit } });
    setEdit(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container-form">
      <section className="container_form_field">
        <Input
          name="scientific_name"
          errors={errors}
          register={register}
          defaultValue={item.scientific_name}
          label="Scientific Name"
        />
      </section>

      <section className="container_form_field">
        <Input
          name="tree_name"
          register={register}
          errors={errors}
          defaultValue={item.tree_name}
          label="Tree Name"
        />
      </section>

      <section className="container_form_field">
        <Input
          name="fruit_name"
          register={register}
          errors={errors}
          defaultValue={item.fruit_name}
          label="Fruit Name"
        />
      </section>

      <section className="container_form_field">
        <Input
          name="family"
          label="Family"
          register={register}
          errors={errors}
          defaultValue={item.family}
        />
      </section>

      <section className="container_form_field">
        <Input
          name="origin"
          label="Origin"
          register={register}
          errors={errors}
          defaultValue={item.origin}
        />
      </section>

      <section className="container_form_field">
        <Input
          name="description"
          label="Description"
          register={register}
          errors={errors}
          defaultValue={item.description}
        />
      </section>

      <section className="container_form_field">
        <Input
          name="bloom"
          label="Bloom"
          register={register}
          errors={errors}
          defaultValue={item.bloom}
        />
      </section>

      <section className="container_form_field">
        <Input
          name="maturation_fruit"
          label="Maturation Fruit"
          register={register}
          errors={errors}
          defaultValue={item.maturation_fruit}
        />
      </section>

      <section className="container_form_field">
        <Input
          name="life_cycle"
          label="Life Cycle"
          register={register}
          errors={errors}
          defaultValue={item.life_cycle}
        />
      </section>

      <section className="container_form_field">
        <Input
          name="climatic_zone"
          label="Climate Zone"
          register={register}
          errors={errors}
          defaultValue={item.climatic_zone}
        />
      </section>

      <input type="submit" className="button" />
    </form>
  );
}
