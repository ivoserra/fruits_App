import React from 'react'
import {RiLoader4Line} from 'react-icons/ri'

import './Loader.scss'

const Loader = () => {

  return (
    <div className="Loader">
       <RiLoader4Line className="loading__icon"/>
    </div>
  )
}

export default Loader