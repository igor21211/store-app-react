import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main/Main";
import NotFound from "./Pages/Error/Error";
import ProductList from "./Pages/ProductList/ProductList";
import Card from "./Pages/Card/Card";
import ProductPage from "./Pages/ProductPage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "/cart",
        element: <Card />,
      },
      {
        path: "/products/:category",
        element: <ProductList />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
