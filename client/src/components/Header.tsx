import React from 'react'

const Header = () => {
  return (
    <header role='navigation' className='header'>
      <section className='container'>
        <div className='logoWrapper'>
          <span>REACT Cinema Project</span>
        </div>
        {/* <nav className='header__main-nav'></nav>
        <nav className='header__main-nav header__main-nav--dropdown-login'></nav> */}
        <nav className='header__sitenav'>
          <ul className='container'>
            <li>REPERTUAR</li>
            <li>WYDARZENIA</li>
            <li>PROMOCJE</li>
            <li>NEWSY</li>
            <li>SZKOLY</li>
          </ul>
        </nav>

        <nav>
          <span>KONTO</span>
          <ul>
            <li>

            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default Header