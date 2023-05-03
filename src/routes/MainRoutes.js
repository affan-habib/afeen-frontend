import { lazy } from "react";

// project import
import MainLayout from "layout/MainLayout";
import Loadable from "components/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";

// render - sample page
const Dashboard = Loadable(lazy(() => import("pages/dashboard/Dashboard")));
const Package = Loadable(lazy(() => import("pages/package/Packages")));
const CreatePackage = Loadable(
  lazy(() => import("pages/package/CreatePackage"))
);
const Users = Loadable(lazy(() => import("pages/users/Users")));
const Employers = Loadable(lazy(() => import("pages/employers/Employers")));
const Employees = Loadable(lazy(() => import("pages/employees/Employees")));
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
          path: "users",
          element: <Users />,
        },
        {
          path: "employers",
          element: <Employers />,
        },
        {
          path: "employees",
          element: <Employees />,
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
          path: "jobs/job-details/:id",
          element: <JobDetails />,
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
