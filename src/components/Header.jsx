import React from 'react'

import { Link } from 'react-router-dom'

import './Header.scss'

export const Header = () => {
  return (
    <section className="header">
        <section className="header__inner">
        <Link to="/" className="button"><p>Home</p></Link>
        <Link to="/create" className="button"><p>Create</p></Link>
        </section>
    </section>
  )
}
