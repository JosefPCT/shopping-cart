import { NavLink, useLocation } from "react-router-dom";
import styles from './Navigation.module.css';

const Navigation = (props) => {
  let location = useLocation();

  function isShopUrl(){
    return location.pathname === '/shop' || location.pathname ==='/shop/cart';
  }

  console.log("nav comp");
  console.log(props.cartObj);

  function shopNavInfo(){
    return(
      <>
        <span>{props.num}</span>
        <NavLink
        to='/shop/cart'
        >
        Cart
        </NavLink>
      </>
    );
  }

  return(
    <>
      <div className={styles.navContainer}>
        <div className={styles.centerItems}>
          <NavLink
          to="/"
          className={( {isActive, isPending} ) =>
            isPending ? styles.pendingLink : isActive ? styles.activeLink : ""
          }
          >
          Home
          </NavLink>
          <NavLink
          to="/shop"
          className={( {isActive, isPending} ) =>
            isPending ? styles.pendingLink : isActive ? styles.activeLink : ""
          }
          >
          Shop</NavLink>
        </div>
        <div>
          {isShopUrl() && shopNavInfo()}
        </div>
      </div>
      
    </>
    
  ); 
}

export default Navigation;