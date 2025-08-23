import styles from './Home.module.css'
import homeImage from '../assets/glassesbook.jpg'

const Home = () => {
  return (
    <div className={styles.homeImgContainer}>
      <img src={homeImage} alt="Glasses on top of a book" />
      <button>
        <a href="/shop">Find a product now</a>
      </button>
    </div>
    // img
    // button
    // description
  );
}

export default Home;