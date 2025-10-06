import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../Pages/Landing";
import Support from "../Components/Support";
import Test from "../Pages/test"
import Features from "../Components/Features"

const Approute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/features",
     element: <Features />
    },
    {
      path: "/test",
      element: <Test />
    },
    {
      path: "/support",
      element: <Support/>
    }
    
  ]);

  return <RouterProvider router={router} />;
};

export default Approute;

