import { lazy } from "react";

// project import

import Loadable from "components/Loadable";
import CommonLayout from "layout/CommonLayout";
import Payment from "sections/apps/e-commerce/checkout/Payment";
import Dashboard from "pages/components/Dashboard";

const AppECommProducts = Loadable(
  lazy(() => import("pages/apps/e-commerce/product"))
);
const AppECommProductDetails = Loadable(
  lazy(() => import("pages/apps/e-commerce/product-details"))
);
const AppECommProductList = Loadable(
  lazy(() => import("pages/apps/e-commerce/products-list"))
);
const AppECommCheckout = Loadable(
  lazy(() => import("pages/apps/e-commerce/checkout"))
);
const AppECommAddProduct = Loadable(
  lazy(() => import("pages/apps/e-commerce/add-product"))
);
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <>
          <CommonLayout layout="landing" />
        </>
      ),
      children: [
        {
          path: "/",
          element: <AppECommProducts />,
        },
        {
          path: "product-details/:id",
          element: <AppECommProductDetails />,
        },
        {
          path: "product-list",
          element: <AppECommProductList />,
        },
        {
          path: "add-new-product",
          element: <AppECommAddProduct />,
        },
        {
          path: "checkout",
          element: <AppECommCheckout />,
        },
        {
          path: "components",
          element: <Dashboard />,
        },
      ],
    },
  ],
};

export default MainRoutes;
