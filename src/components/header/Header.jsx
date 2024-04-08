import Cookies from "js-cookie";
import { useContext, useEffect, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CgMenuGridO } from "react-icons/cg";
import {
  IoLogOutOutline,
  IoMenu,
  IoMoonSharp,
  IoNotificationsSharp,
  IoPersonCircleOutline,
  IoSunny,
} from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";
import { WindmillContext } from "windmill-react-ui-kit";
import { AdminContext } from "../../context/AdminContext";
import { SidebarContext } from "../../context/SidebarContext";

const Header = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const { dispatch } = useContext(AdminContext);
//  const { adminInfo } = state;
  const { mode, toggleMode } = useContext(WindmillContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [masterMenuOpen, setMasterMenuOpen] = useState(false);
  const history = useHistory();
  const pRef = useRef();
  const nRef = useRef();
  const mRef = useRef();

  const handleLogOut = () => {
    dispatch({ type: "USER_LOGOUT" });
    history.push('/login')
    localStorage.clear();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!pRef?.current?.contains(e.target)) {
        setProfileOpen(false);
      }
      if (!nRef?.current?.contains(e.target)) {
        setNotificationOpen(false);
      }
      if (!mRef?.current?.contains(e.target)) {
        setMasterMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [pRef, nRef, mRef]);

  const handleNotificationOpen = () => {
    setNotificationOpen(!notificationOpen);
    setProfileOpen(false);
    setMasterMenuOpen(false);
  };
  const handleProfileOpen = () => {
    setProfileOpen(!profileOpen);
    setNotificationOpen(false);
    setMasterMenuOpen(false);
  };

  const handleMasterMenuOpen = () => {
    setMasterMenuOpen(!masterMenuOpen);
    setNotificationOpen(false);
    setProfileOpen(false);
  };

  return (
    <>
      <header className="z-40 py-4 bg-white shadow-sm dark:bg-gray-800">
        <div className="container flex items-center justify-between h-full px-6 mx-auto text-green-500 dark:text-green-500">
          {/* <!-- Mobile hamburger --> */}
          <button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <IoMenu className="w-6 h-6" aria-hidden="true" />
          </button>
          <span className="text-gray-500 dark:text-white">Company Name</span>

          <ul className="flex justify-end items-center flex-shrink-0 space-x-6">
            {/* <!-- Theme toggler --> */}
            <li className="flex">
              <button
                className="rounded-md focus:outline-none"
                onClick={toggleMode}
                aria-label="Toggle color mode"
              >
                {mode === "dark" ? (
                  <IoSunny className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <IoMoonSharp className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </li>

            {/* <!-- Profile menu --> */}
            <li className="relative inline-block text-left pr-8" ref={pRef}>
              <button
                className="rounded-full dark:bg-gray-500 bg-green-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none"
                onClick={handleProfileOpen}
              >
                <span className="text-gray-500 dark:text-white pl-9 font-bold">Susan</span>
                {/* {adminInfo.image ? (
                  <Avatar
                    className="align-middle"
                    src={`${adminInfo.image}`}
                    aria-hidden="true"
                  />
                ) : (
                  <span>{adminInfo.email[0].toUpperCase()}</span>
                )} */}
              </button>
                
              {profileOpen && (
                <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                    <Link to="/view-profile">
                      <span className="flex items-center text-sm">
                        <IoPersonCircleOutline
                          className="w-4 h-4 mr-3"
                          aria-hidden="true"
                        />
                        <span>Profile</span>
                      </span>
                    </Link>
                  </li>
                  <li
                    onClick={handleLogOut}
                    className="cursor-pointer justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  >
                    <span className="flex items-center text-sm">
                      <IoLogOutOutline
                        className="w-4 h-4 mr-3"
                        aria-hidden="true"
                      />
                      <span>Log out</span>
                    </span>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
