import Carousel from '../../components/Carousel/Carousel'
import GradientBar from '../../components/GradientBar/GradientBar';
import InfiniteSlider from '../../components/InfiniteSlider/InfiniteSlider';
import "../../styles/global.scss";
import classes from "./HomePage.module.scss";

const HomePage = () => {

  return (
    <>
      <main className={classes.main}>
        <GradientBar />
        <div className={`${classes.main__content} container`}>
          <h2>Upcoming movies</h2>
          {/* <Carousel /> */}
          <InfiniteSlider />
        </div>
      </main>
    </>
  )
}

export default HomePage