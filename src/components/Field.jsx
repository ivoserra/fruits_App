import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useForm } from 'react-hook-form'

import '../App.scss'


const Input = ({label, register, required})=>(
  <section className="field_input">
  <label>{label}</label>
  <input {...register(label, {required}, { pattern:  /^[A-Za-z]+$/i })}/>
  </section>
  
)

export default function Field({ name, category, subject}) {

  const {register} =useForm();

  const [edit, setEdit] = useState(false);
  

  if( subject === "description"){

    return(
      <div className="Field">
      {edit ? (
        <section>
          <p>{category}</p>
          <textarea name={subject}/>
        </section>
      ) : (
        <section>
          <p>{category}</p>
          <p>{name}</p>
        </section>
      )
      }
      <button onClick={ (e) => setEdit(!edit)} className="button-edit">Edit</button> 
    </div>
    )
  }

  return (
    <div className="Field">
      
      { edit ? (
        <section className="field_input">
        <Input label={category} register={register}/>
        </section>
      ) : (
        <section>
        <p>{category}</p>
        <p>{name}</p>
      </section>
      )}
      <button onClick={ (e) => setEdit(!edit)} className="button-edit">Edit</button> 
    </div>
  );
}
