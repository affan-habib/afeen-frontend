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
      id: "recipes",
      title: "Recipes",
      type: "item",
      url: "/recipes",
      icon: icons.BoxPlotOutlined,
    },

  ],
};

export default packages;
