import Navigation from "./Navigation";
import products from "../products";

const Shop = () =>{
  return(
    <>
      <Navigation />
      <h1>This is the shop page!</h1>
      {console.log(products[1])}
    </>
  );
}

export default Shop;