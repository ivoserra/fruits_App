import React from 'react'
import CreateButton from './CreateButton.jsx'
import HomeButton from './HomeButton.jsx'

export const Header = () => {
  return (
    <section className="header">
        <section className="header__inner">
        <HomeButton/>
        <CreateButton/>
        </section>
    </section>
  )
}
