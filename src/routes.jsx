import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import CartPage from "./pages/CartPage";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
];

export default routes;
