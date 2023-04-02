import { lazy } from "react";

// project import
import MainLayout from "layout/MainLayout";
import Loadable from "components/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";

// render - sample page
const Dashboard = Loadable(lazy(() => import("pages/dashboard/Dashboard")));
const Package = Loadable(lazy(() => import("pages/package/Packages")));
const CreatePackage = Loadable(lazy(() => import("pages/package/CreatePackage")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "package",
          element: <Package />,
        },
        {
          path: "add-package",
          element: <CreatePackage />,
        },
      ],
    },
  ],
};

export default MainRoutes;
