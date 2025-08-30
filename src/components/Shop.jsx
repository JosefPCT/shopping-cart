import Navigation from "./Navigation";
// import products from "../products";
import styles from'./Shop.module.css';
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";


const Shop = () =>{
  const [apiProducts, setApiProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  let location = useLocation();

  useEffect(() => {
    const fetchProductApi = async() => {
      try {
        const resp = await fetch(
          'https://fakestoreapi.com/products'
        );
        if(!resp.ok) {
          throw new Error(`HTTP error: Status ${resp.status}`)
        }
        let productsData = await resp.json();
        setApiProducts(productsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setApiProducts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductApi();
  }, [])

  function isShopPage(){
    return location.pathname === '/shop';
  }

  function isCartPage(){
    return location.pathname === '/shop/cart';
  }

  function addToCartHandler(e){
    console.log("add to cart handler");
    // console.log(e.target.parentNode.id);
    let target = e.target;

    // Used for array data type of cart items
    setCart([
        ...cart,
        {
          cartId: crypto.randomUUID(),
          cartItem: getProductById(e.target.parentNode.id),
          productQuantity: parseInt(target.previousSibling.value),
        }
    ]);


    // console.log(cart);
  }

  function removeCartItemHandler(e){
    console.log('removing cart item...');
    // console.log(e.target.parentNode.parentNode.id);
    let id = e.target.parentNode.parentNode.id;
    
    setCart(
      cart.filter((item) => item.cartId !== id)
    );
  }

  function getProductById(id){
    id = parseInt(id);
    console.log('getting products');
    return apiProducts.find((product) => product.id === id);
  }

  // Iterate through the cart object and get the total value of all `numOfProducts`, will be sent to Navigation component as a prop
  function getTotalOfItems(){
    console.log("getting total items in the cart...");
    // console.log(cart);

    // For array type data
    let sum = cart.reduce(
      (acc, item) => acc + item.productQuantity,
      0,
    );

    return sum;
  }

  // Render JSX

  function renderShop(){
    return(
      <>
        {/* For API products from fakestore api */}
        <h1>This is the shop page!</h1>
        <ul className={styles.productList}>
          {apiProducts.map(product => {
            return(
              <li key={product.id}>
                <div id={product.id} className={styles.productContainer}>
                  <img className={styles.productThumb} src={product.image} alt={'image of ' + product.name} />
                  <p>Product: {product.title}</p>
                  <p>Price: {product.price}</p>
                  <input type="number" data-testid='my-input'/>
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
          {cart.map(item => {
             return(
              <li key={item.cartId} id={item.cartId}>
                <p>{item.cartItem.title}
                  <button onClick={removeCartItemHandler}>Remove item</button>
                </p>
                
              </li>
             );
          })}
        </ul>
        <button>Checkout</button>
      </>
    );
  }

  return(
    <>
      <Navigation num={getTotalOfItems()} cartObj={cart} />
      <h1>Shop here</h1>
      {loading && (<div>Loading...</div>)}
      {error && (<div>Error: {error}</div>)}
      {/* {console.log(apiProducts)} */}
      {(!loading && isShopPage()) && renderShop()}
      {isCartPage() && renderCart()}
    </>
  );
}

export default Shop;