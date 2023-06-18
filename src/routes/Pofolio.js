import { lazy } from "react";
import Loadable from "components/Loadable";

const Portfolio = Loadable(lazy(() => import("pages/porfolio/Portfolio")));
const MyCv = Loadable(lazy(() => import("pages/porfolio/MyCv")));

const Porfolio = {
  path: "/",
  children: [
    {
      children: [
        {
          path: "/",
          element: <Portfolio />,
        },
        {
          path: "/resume",
          element: <MyCv />,
        },
      ],
    },
  ],
};

export default Porfolio;
