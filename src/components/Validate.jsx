import React from 'react'
import { FcApproval } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import './Validate.scss'

 export default function Validate({setIsSuccessful}){

/*   useEffect(()=>{
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }) */


  function NewFruit(){
    setIsSuccessful(false)
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }

  return (

    <div className="Validate">
      <div className="validate-message">
        <FcApproval className="icon"/>
        <h1>Submited with success</h1>
      </div>
      <section className="validate-field">
        <button className="validate-button" onClick={NewFruit}>CreateFruit</button>
        <Link to='/' className="validate-button">Home</Link>
      </section>
  </div>
  )
}

