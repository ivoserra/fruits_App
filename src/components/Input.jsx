import React from "react";
import { ErrorMessage } from "@hookform/error-message";

import './Input.scss'

// different approach as Error Message does: 
/* const InputError = ({ errors, name }) => {
  return (
    <div className="Error">
      {errors[name].type === "required" && <p></p>}
      {errors[name].type === "pattern" && <p>{errors[name].message}</p>}
      {errors[name].type === "min" && <p>Min 4 characters</p>}
    </div>
  );
}; */

export const Input = ({ label, name, register, errors, defaultValue }) => {


  function pattern(name) {
    // To match letters, accents and Spaces everywhere, except Spaces at start
    const alphaAcc = /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]*$/;

    // match alpanumeric with accents and whitespaces
    const alphaNum = /^[a-zA-Z0-9\u00C0-\u00FF,:.\- ]*$/;

    if (
      name === "bloom" ||
      name === "maturation_fruit" ||
      name === "life_cycle" ||
      name === "climate_zone"
    ) {
      return {
        value: alphaNum,
        message: "Only numbers and letters with accents allowed",
      };
    }

    return { value: alphaAcc, message: "Only Letters and accents are allowed" };
  }


  return (
    <section className="field_input">
      <h3>{label} :</h3>
      {defaultValue && <p>{defaultValue}</p>}
      {name === "description" ? (
        <textarea
          cols="30"
          rows="5"
          {...register(name, { required: "this field is required" })}
        />
      ) : (
        <input
          {...register(name, {
            required: "this field is required",
            pattern: pattern(name),
            min: { value: 4, message: "4 characters minimum" },
          })}
        />
      )}
      {/*  { comment -> example of different way of doing the same as ErrorMessage :
        {errors?.[name] && <InputError errors={errors} name={name}/>} 
        */}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="Error">{message}</p>}
      />
    </section>
  );
};
