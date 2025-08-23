import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';

const Navigation = () => {
  return(
    <>
      <div className="nav-container">
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
    </>
    
  ); 
}

export default Navigation;