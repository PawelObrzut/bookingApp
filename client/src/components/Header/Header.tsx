import React from 'react';
import classes from "./Header.module.scss";
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { RiMenuAddFill } from 'react-icons/ri'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__content__logo}>
          <span>React Cinema</span>
        </div>
        <nav className={classes.header__content__navMobile}>
          <ul className={classes.header__content__list}>
            <li><Link to="/repertoire">repertoire</Link></li>
            <li className='header__content--toggle'>
              <span>Menu</span><BiMenuAltRight />
            </li>
          </ul>
        </nav>
        <nav className={classes.header__content__navDesktop}>
          <ul className={classes.header__content__list}>
            <li><Link to="/repertoire">repertoire</Link></li>
            <li><Link to="/events">events</Link></li>
            <li><Link to="/discounts">discounts</Link></li>
            <li><Link to="/news">news</Link></li>
          </ul>

          <div className={classes.header__content__account}>
            <span>account</span>
            <div className={classes.header__content__accountDropdown}>
              <ul>
                <li><AiOutlineUser /> <Link to="login">Log In</Link></li>
                <li><RiMenuAddFill /> <Link to="register">Register</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header