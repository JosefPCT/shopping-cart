import Navigation from "./Navigation";
import products from "../products";
import styles from'./Shop.module.css';
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

console.log(products[1]);

const Shop = () =>{
  const [cart, setCart] = useState([]);

  let location = useLocation();

  function isShopPage(){
    return location.pathname === '/shop';
  }

  function isCartPage(){
    return location.pathname === '/shop/cart';
  }

  function addToCartHandler(e){
    console.log("add to cart handler");
    console.log(e.target.parentNode.id);
    let target = e.target;
    // let x = getProductById(e.target.parentNode.id);
    // console.log(x);

    // Working code 
    // if(getProductById(target.parentNode.id)){
    //   setCart(prevCart => ({
    //     ...prevCart,
    //     [target.parentNode.id]: {
    //       numOfProducts: parseInt(target.previousSibling.value),
    //     },
    //   }));
    // }

    setCart(
      [
        ...cart,
        {
          cartId: crypto.randomUUID(),
          cartItem: getProductById(e.target.parentNode.id),
          productQuantity: parseInt(target.previousSibling.value),
        }
      ]
    );


    console.log(cart);
  }

  function getProductById(id){
    id = parseInt(id);
    console.log('getting products');
    return products.find((product) => product.id === id);
  }

  // Iterate through the cart object and get the total value of all `numOfProducts`, will be sent to Navigation component as a prop
  function getTotalOfItems(){
    console.log("getting total items in the cart...");
    console.log(cart);

    // For object type data
    // for(const [key, value] of Object.entries(cart)){
    //   total += value.numOfProducts;
    // }

    // For array type data
    let sum = cart.reduce(
      (acc, item) => acc + item.productQuantity,
      0,
    );

    return sum;
  }

  function renderShop(){
    return(
      <>
        <h1>This is the shop page!</h1>
        <ul className={styles.productList}>
          {products.map(product => {
            return(
              <li key={product.id}>
                <div id={product.id} className={styles.productContainer}>
                  <img className={styles.productThumb} src={`../src/assets/${product.imgname}.jpg`} alt={'image of ' + product.name} />
                  <p>Product Name: {product.name}</p>
                  <p>Price: {product.price}</p>
                  <input type="text" />
                  <button onClick={addToCartHandler}>Add To Cart</button>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  function renderCart(){
    return(
      <>
        <h1>This is the cart page!</h1>
        <ul>
          {cart.map(item => console.log(item))}
        </ul>
      </>
    );
  }

  return(
    <>
      <Navigation num={getTotalOfItems()} cartObj={cart} />
      {isShopPage() && renderShop() }
      {isCartPage() && renderCart()}
    </>
  );
}

export default Shop;