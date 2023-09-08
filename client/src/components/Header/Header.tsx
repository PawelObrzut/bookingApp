// import React from 'react'
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { BsChevronDown } from'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header role='navigation' className='header'>
      <section className='nav-container'>
        <div className="header__logo-wrapper">
          <Link to="/">
            <span className='header__logo-wrapper--logo'>React Cinema</span>
          </Link>
        </div>

        <nav className='header__sitenav--mobile'>
          <ul className='container'>
            <li>repertoire</li>
            <li>
              <span>Menu</span>
              <AiOutlineMenu className="header__sitenav--toggle-icon" />
            </li>
          </ul>
        </nav>

        <nav className='header__sitenav'>
          <ul className='container'>
            <li>repertoire</li>
            <li>events</li>
            <li>discounts</li>
            <li>news</li>
            <li>schools</li>
          </ul>
        </nav>

        <nav className='header__sitenav--dropdown-login'>
          <div className="profile">
            <span className="profile__details">
              <span className="icon icon-account">
                <AiOutlineUser />
              </span>
              <span className="profile__details__account">
                account
                <span className="icon icon-arrow-down">
                <BsChevronDown />
                </span>
              </span>
            </span>
          </div>

          <div className="menu__dropdown">
            <ul className="menu__dropdown--list">
              <li>
                <Link to="/logging">
                  <AiOutlineUser /> Log In
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <AiOutlineUser /> Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        
      </section>
    </header>
  )
}

export default Header