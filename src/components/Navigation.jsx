import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';

const Navigation = () => {
  return(
    <NavLink 
    to="/shop"
    className={( {isActive, isPending} ) => 
      isPending ? styles.pendingLink : isActive ? styles.activeLink : ""
    } 
    >
    Shop</NavLink>
  ); 
}

export default Navigation;