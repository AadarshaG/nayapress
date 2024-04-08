import { useContext } from "react";
import { NavLink, Route } from "react-router-dom";
import { WindmillContext } from "windmill-react-ui-kit";
import logoDark from "../../assets/img/logo/Quality.png";
import logoLight from "../../assets/img/logo/Quality.png";

import sidebar from "../../routes/sidebar";
import SidebarSubMenu from "./SidebarSubMenu";

const SidebarContent = () => {
  const { mode } = useContext(WindmillContext);

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className=" text-gray-900 dark:text-gray-200" href="/dashboard">
        {mode === "dark" ? (
          <img src={logoLight} alt="dashtar" width="135" className="pl-6" />
        ) : (
          <img src={logoDark} alt="dashtar" width="135" className="pl-6" />
        )}
      </a>
      <ul className="mt-8">
        {sidebar.map((route) =>
          route.routes ? (
            <SidebarSubMenu route={route} key={route.name} />
          ) : (
            <li className="relative" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200"
                activeClassName="text-green-500 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-green-500 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <route.icon className="w-5 h-5" aria-hidden="true" />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SidebarContent;
