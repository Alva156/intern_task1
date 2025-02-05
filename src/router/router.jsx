import { createBrowserRouter } from "react-router-dom";
import Guest from "../layout/Guest.jsx";
import Home from "../pages/guest/home.jsx";
import About from "../pages/about.jsx";
import Stories from "../pages/guest/stories.jsx";
import FAQS from "../pages/faqs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/stories",
        element: <Stories />,
      },
      {
        path: "/faqs",
        element: <FAQS />,
      },
    ],
  },
]);

export default router;
