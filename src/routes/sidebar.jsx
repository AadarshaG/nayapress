import { FiGrid, FiShoppingBag, FiClipboard } from "react-icons/fi";
import { GoLaw } from "react-icons/go";
import { FaHandshake, FaUser, FaUsers } from "react-icons/fa";

const sidebar = [
  {
    path: "/dashboard", // the url
    icon: FiGrid, // icon
    name: "ड्यास बोर्ड", // name that appear in Sidebar
  },
  {
    path: "/staff-users", // the url
    icon: FaUser, // icon
    name: "कर्मचारीहरु", // name that appear in Sidebar
  },
  {
    path: "/our-customers", // the url
    icon: FaUsers, // icon
    name: "ग्राहकहरु", // name that appear in Sidebar
  },
 
];

export default sidebar;
