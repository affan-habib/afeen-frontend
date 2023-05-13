import { lazy } from "react";
import Loadable from "components/Loadable";

// render - login
const Portfolio = Loadable(lazy(() => import("pages/porfolio/Portfolio")));

// ==============================|| AUTH ROUTING ||============================== //

const Porfolio = {
  path: "/",
  children: [
    {
      children: [
        {
          path: "/",
          element: <Portfolio />,
        },
      ],
    },
  ],
};

export default Porfolio;
