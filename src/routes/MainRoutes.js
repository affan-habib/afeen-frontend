import { lazy } from "react";

// project import
import MainLayout from "layout/MainLayout";
import Loadable from "components/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";
import RecipeDetails from "pages/recipes/RecipeDetails";
import ResumeDetails from "pages/resumes/ResumeDetails";
import Users from "pages/users/Users";
import EditUser from "pages/users/EditUser";

// render - sample page
const Dashboard = Loadable(lazy(() => import("pages/dashboard/Dashboard")));
const Package = Loadable(lazy(() => import("pages/package/Packages")));
const CreatePackage = Loadable(
  lazy(() => import("pages/package/CreatePackage"))
);
const Recipes = Loadable(lazy(() => import("pages/recipes/Recipes")));
const AddRecipe = Loadable(lazy(() => import("pages/recipes/AddRecipe")));
const Resumes = Loadable(lazy(() => import("pages/resumes/Resumes")));
const AddResume = Loadable(lazy(() => import("pages/resumes/AddResume")));
const CreateUser = Loadable(lazy(() => import("pages/user/CreateUser")));
const Jobs = Loadable(lazy(() => import("pages/job/Jobs")));
const JobDetails = Loadable(lazy(() => import("pages/job/JobDetails")));
const CvRequests = Loadable(lazy(() => import("pages/cv-requests/CvRequests")));
const AppECommProducts = Loadable(lazy(() => import('pages/apps/e-commerce/product')));
const AppECommProductDetails = Loadable(lazy(() => import('pages/apps/e-commerce/product-details')));
const AppECommProductList = Loadable(lazy(() => import('pages/apps/e-commerce/products-list')));
const AppECommCheckout = Loadable(lazy(() => import('pages/apps/e-commerce/checkout')));
const AppECommAddProduct = Loadable(lazy(() => import('pages/apps/e-commerce/add-product')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <>
          <MainLayout />
        </>
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
          path: "recipes/:id",
          element: <RecipeDetails />,
        },
        {
          path: "resumes",
          element: <Resumes />,
        },
        {
          path: "add-resume",
          element: <AddResume />,
        },
        {
          path: "resumes/:id",
          element: <ResumeDetails />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "users/edit/:id",
          element: <EditUser />,
        },
        {
          path: "users/:id",
          element: <ResumeDetails />,
        },

        {
          path: "jobs",
          element: <Jobs />,
        },
        {
          path: "cv-requests",
          element: <CvRequests />,
        },
        {
          path: 'products',
          element: <AppECommProducts />
        },
        {
          path: 'product-details/:id',
          element: <AppECommProductDetails />
        },
        {
          path: 'product-list',
          element: <AppECommProductList />
        },
        {
          path: 'add-new-product',
          element: <AppECommAddProduct />
        },
        {
          path: 'checkout',
          element: <AppECommCheckout />
        }
      ],
    },
  ],
};

export default MainRoutes;
