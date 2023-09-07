import React from 'react'
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { BsChevronDown } from'react-icons/bs';

const Header = () => {
  return (
    <header role='navigation' className='header'>
      
      <section className='container'>
        <div className='logoWrapper'>
          <span>REACT Cinema Project</span>
        </div>

        <nav className='header__sitenav'>
          <ul className='container'>
            <li>repertoire</li>
            <li>events</li>
            <li>discounts</li>
            <li>news</li>
            <li>schools</li>
          </ul>
        </nav>

        <nav className='header__sitenav--mobile'>
          <ul className='container'>
            <li>repertoire</li>
            <li>
              <span>Menu</span>
              <AiOutlineMenu className="header__sitenav--toggle-icon" />
            </li>
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
        </nav>
      </section>
    </header>
  )
}

export default Header