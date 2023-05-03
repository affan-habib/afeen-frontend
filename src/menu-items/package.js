import {
  BoxPlotOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  MenuUnfoldOutlined,
  UserOutlined,
  BoxPlotOutlined,
  CarryOutOutlined,
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const packages = {
  id: "package",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard",
      icon: icons.MenuUnfoldOutlined,
    },
    {
      id: "users",
      title: "Users",
      type: "collapse",
      icon: icons.UserOutlined,
      children: [
        {
          id: "all-users",
          title: "All Users",
          type: "item",
          url: "/users",
          icon: icons.UserOutlined,
        },
        {
          id: "employers",
          title: "Employers",
          type: "item",
          url: "/employers",
          icon: icons.UserOutlined,
        },
        {
          id: "employees",
          title: "Employees",
          type: "item",
          url: "/employees",
          icon: icons.UserOutlined,
        },
      ],
    },
    {
      id: "package",
      title: "Package",
      type: "item",
      url: "/package",
      icon: icons.BoxPlotOutlined,
    },
    {
      id: "jobs",
      title: "jobs",
      type: "item",
      url: "/jobs",
      icon: icons.CarryOutOutlined,
    },
    {
      id: "cv-requests",
      title: "CV Requests",
      type: "item",
      url: "/cv-requests",
      icon: icons.CarryOutOutlined,
    },
  ],
};

export default packages;
