import {
  BoxPlotOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  MenuUnfoldOutlined,
  UserOutlined,
  BoxPlotOutlined,
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
  ],
};

export default packages;
