import {
  BoxPlotOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  CarryOutOutlined
} from "@ant-design/icons";

// icons
const icons = {
  MenuUnfoldOutlined,
  UserOutlined,
  BoxPlotOutlined,
  CarryOutOutlined
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
      id: "package",
      title: "Package",
      type: "item",
      url: "/package",
      icon: icons.BoxPlotOutlined,
    },
    {
      id: "users",
      title: "Users",
      type: "item",
      url: "/users",
      icon: icons.UserOutlined,
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
