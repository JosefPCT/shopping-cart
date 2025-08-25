import Navigation from "./Navigation";
import products from "../products";
import styles from'./Shop.module.css';

console.log(products[1]);

const Shop = () =>{
  return(
    <>
      <Navigation />
      <h1>This is the shop page!</h1>
      <ul className={styles.productList}>
        {products.map(product => {
          return(
            <li key={product.id}>
              <div className={styles.productContainer}>
                <img className={styles.productThumb} src={`../src/assets/${product.imgname}.jpg`} alt={'image of ' + product.name} />
                <p>Product Name: {product.name}</p>
                <p>Price: {product.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Shop;