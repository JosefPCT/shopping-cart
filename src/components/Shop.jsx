import Navigation from "./Navigation";
import products from "../products";
console.log(products[1]);

const Shop = () =>{
  return(
    <>
      <Navigation />
      <h1>This is the shop page!</h1>
      <ul>
        {products.map(product => {
          return(
            <li key={product.id}>
              <div>
                <img src={product.imgsrc} alt={'image of ' + product.name} />
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