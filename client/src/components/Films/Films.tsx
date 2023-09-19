import React from 'react';
import classes from './Films.module.scss';
import { MdOutlineCalendarMonth } from 'react-icons/md';

const Films = () => {
  return (
    <div className={classes.films}>
      <section className={classes.films__header}>
        <h2>We Play Now</h2>
        <div>
          <MdOutlineCalendarMonth />
          <span>Today, Monday 18.09</span>
        </div>
      </section>
      <section className={classes.film}>
        {/* map over reperoire list */}
        <div className={classes.poster__wrapper}>
          <img src="https://media.multikino.pl/uploads/images/films_and_events/aftereverything-embrace-2000x3000-300dpi-pl-cut_01465a7fce.jpg" alt="" />
        </div>
        <div>

          <h1>SOME TITLE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sit facilis pariatur nisi natus molestias similique odio minus, numquam ...
          </p>

          <ul>
            <li className='btn'>15:20</li>
            <li className='btn'>19:50</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Films