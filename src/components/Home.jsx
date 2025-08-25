import styles from './Home.module.css'
// import homeImage from '../assets/glassesbook.jpg'
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className={styles.homeImgContainer}>
        <img src='../src/assets/glassesbook.jpg' alt="Glasses on top of a book" />
        <button>
          <Link to="/shop">Find a product now</Link>
        </button>
      </div>
    </>
    // img
    // button
    // description
  );
}

export default Home;