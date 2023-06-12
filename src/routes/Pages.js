import { lazy } from "react";
import Loadable from "components/Loadable";

const Form = Loadable(lazy(() => import("pages/porfolio/Form")));

const Porfolio = {
  path: "/",
  children: [
    {
      children: [
        {
          path: "/",
          element: <Form />,
        },
      ],
    },
  ],
};

export default Porfolio;
