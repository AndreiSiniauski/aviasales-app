import React from 'react'
import classes from './Header.module.scss'

const Header: React.FC = () => {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src="./img/Logo.svg" alt="logo" />
        </div>
      </header>
    )
  }
  
  export default Header
  