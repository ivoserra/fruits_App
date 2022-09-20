import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../Context/UserContext";

export default function Field({ name, category, subject }) {

  const { api, setApi }=useContext(UserContext)

  const [edit, setEdit] = useState(false);

  return (
    <div>
      {edit ? (
        <section>
          <p>{category}</p>
        <input name={subject} onChange={(e) => setApi({...api, [e.target.name] : e.target.value})} placeholder={name}/>
        </section>
      ) : (
        <p>
          {category}:{name}
        </p>
      )}
      <button onClick={ (e) => setEdit(!edit)}>Edit</button> 
    </div>
  );
}
