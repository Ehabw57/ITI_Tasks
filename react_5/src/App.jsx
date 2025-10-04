import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import Products from "./Pages/Products";
import Favorite from "./Pages/Favorite";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import store from "./Store/store";
import { Provider } from "react-redux";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/favorite",
          element: <Favorite />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>Sorry 404 page Not found</h1>,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;

