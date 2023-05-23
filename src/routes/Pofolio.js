import { lazy } from "react";
import Loadable from "components/Loadable";

const Portfolio = Loadable(lazy(() => import("pages/porfolio/Portfolio")));

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
