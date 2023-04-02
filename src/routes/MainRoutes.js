import { lazy } from "react";

// project import
import MainLayout from "layout/MainLayout";
import Loadable from "components/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";

// render - sample page
const Dashboard = Loadable(lazy(() => import("pages/dashboard/Dashboard")));
const Package = Loadable(lazy(() => import("pages/package/Packages")));
const CreatePackage = Loadable(lazy(() => import("pages/package/CreatePackage")));
const Users = Loadable(lazy(() => import("pages/user/Users")));
const CreateUser = Loadable(lazy(() => import("pages/user/CreateUser")));

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
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "add-user",
          element: <CreateUser />,
        },
      ],
    },
  ],
};

export default MainRoutes;
