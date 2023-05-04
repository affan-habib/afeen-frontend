import { lazy } from "react";

// project import
import MainLayout from "layout/MainLayout";
import Loadable from "components/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";
import RecipeDetails from "pages/recipes/RecipeDetails";

// render - sample page
const Dashboard = Loadable(lazy(() => import("pages/dashboard/Dashboard")));
const Package = Loadable(lazy(() => import("pages/package/Packages")));
const CreatePackage = Loadable(
  lazy(() => import("pages/package/CreatePackage"))
);
const Recipes = Loadable(lazy(() => import("pages/recipes/Recipes")));
const AddRecipe = Loadable(lazy(() => import("pages/recipes/AddRecipe")));
const CreateUser = Loadable(lazy(() => import("pages/user/CreateUser")));
const Jobs = Loadable(lazy(() => import("pages/job/Jobs")));
const JobDetails = Loadable(lazy(() => import("pages/job/JobDetails")));
const CvRequests = Loadable(lazy(() => import("pages/cv-requests/CvRequests")));

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
          path: "recipes",
          element: <Recipes />,
        },
        {
          path: "add-recipe",
          element: <AddRecipe />,
        },
        {
          path: "add-user",
          element: <CreateUser />,
        },
        {
          path: "jobs",
          element: <Jobs />,
        },
        {
          path: "recipes/:id",
          element: <RecipeDetails />,
        },
        {
          path: "cv-requests",
          element: <CvRequests />,
        },
        
      ],
    },
  ],
};

export default MainRoutes;
