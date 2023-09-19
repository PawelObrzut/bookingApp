import Carousel from '../../components/Carousel/Carousel'
import Films from '../../components/Films/Films';
import GradientBar from '../../components/GradientBar/GradientBar';
import "../../styles/global.scss";
import classes from "./HomePage.module.scss";

const HomePage = () => {

  return (
    <>
      <main className={classes.main}>
        <GradientBar />
        <div className={`${classes.main__content} container`}>
          <h2>Upcoming movies</h2>
          <Carousel />
        </div>

        <Films />
      </main>
    </>
  )
}

export default HomePage