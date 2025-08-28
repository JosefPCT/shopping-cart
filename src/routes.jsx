import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
    children:[
      { path: "/shop/cart", element: <Cart /> }
    ]
  }
];

export default routes;