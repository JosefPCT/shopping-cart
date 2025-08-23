import styles from './Home.module.css'
import homeImage from '../assets/glassesbook.jpg'
import Navigation from './Navigation';

const Home = () => {
  return (
    <div>
      <div className={styles.homeImgContainer}>
        <img src={homeImage} alt="Glasses on top of a book" />
        <button>
          <a href="/shop">Find a product now</a>
        </button>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
    // img
    // button
    // description
  );
}

export default Home;