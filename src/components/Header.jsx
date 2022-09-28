import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

import './Header.scss'


export const Header = () => {

  const { setEdit }=useContext(UserContext)
  return (
    <section className="header">
        <section className="header__inner">
        <Link to="/" className="button" onClick={e => setEdit(false)}><p>Home</p></Link>
        <Link to="/create" className="button" onClick={e=>setEdit(false)}><p>Create</p></Link>
        </section>

        
    </section>
  )
}
