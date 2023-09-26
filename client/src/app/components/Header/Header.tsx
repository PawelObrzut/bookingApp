
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'
import { RiMenuAddFill } from 'react-icons/ri'
import { useAppDispatch } from '../../../app/hooks';
import { toggleMenu } from '../../features/menuModalSlice';
import classes from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={`${classes.header}`}>
      <span className={classes.logo}>
        <Link to="/">Cinema</Link>
      </span>

      <nav className={`${classes.header__nav} ${classes.minimal}`}>
        <ul>
          <li><Link to="/repertoire">repertoire</Link></li>
          <li onClick={() => dispatch(toggleMenu())}>
            <span>Menu</span>
            <AiOutlineMenu style={{ position: "relative", top: "0.15rem" }} />
          </li>
        </ul>
      </nav>

      <nav className={`${classes.header__nav} ${classes.full}`}>
        <ul>
          <li><Link to="/repertoire">repertoire</Link></li>
          <li><Link to="/events">events</Link></li>
          <li><Link to="/discounts">discounts</Link></li>
          <li><Link to="/news">news</Link></li>
        </ul>

        <div className={`${classes.account} theme_btn`}>
          <span><AiOutlineUser /> account</span>
          <div className={classes.account__dropdown}>
            <ul>
              <li><AiOutlineUser /> <Link to="login">Log In</Link></li>
              <li><RiMenuAddFill /> <Link to="register">Register</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header