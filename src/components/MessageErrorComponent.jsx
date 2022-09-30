
import React from 'react'
import {TbFaceIdError} from 'react-icons/tb'
import { Link } from 'react-router-dom';

import './MessageErrorComponent.scss'

export const MessageErrorComponent = ({error}) => {

  console.log(error)
  

  return (
    <div className="Message">
        <TbFaceIdError className="message__icon"/>
        <p>Ups.. {error} . Try again later !</p>
        <Link to="/" className="button"><p>Home</p></Link>
        
    </div>
  )
}

export default MessageErrorComponent
