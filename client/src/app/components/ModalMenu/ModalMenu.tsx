import { Link } from 'react-router-dom';
import classes from "./ModalMenu.module.scss";
import { TfiClose } from 'react-icons/tfi';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { toggleMenu } from '../../features/menuModalSlice';

const MenuModal = () => {
  const isOpen = useAppSelector((state) => state.menuModal.isOpen)
  const dispatch = useAppDispatch();

  return (
    <aside className={`${classes.menu__content} ${isOpen ? classes.visible : null}`} >
      <span
        className={classes.menu__content__closeButton}
        onClick={() => dispatch(toggleMenu())}>
        <TfiClose />
      </span>

      <nav className={classes.menu__content__nav}>
        <ul>
          <li><Link to="/repertoire">repertoire</Link></li>
          <li><Link to="/events">events</Link></li>
          <li><Link to="/discounts">discounts</Link></li>
          <li><Link to="/news">news</Link></li>
          <li className={`${classes.inline} theme_btn`}><Link to="/login">Log In</Link></li>
          <li className={`${classes.inline} theme_btn`}><Link to="/register">Register</Link></li>
        </ul>
      </nav>

    </aside>
  )
}

export default MenuModal