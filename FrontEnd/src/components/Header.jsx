import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuList = ({ authenticate, menusetter }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-start z-50">
      <div className="w-64 h-full bg-white dark:bg-gray-800 flex flex-col p-6">
        <div className="flex justify-end mb-4">
          <RxCross2 onClick={menusetter} className="text-2xl cursor-pointer text-gray-800 dark:text-gray-200" />
        </div>
        <div className="flex flex-col space-y-4 flex-grow">
        <Link to={'/'}><button className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Home</button></Link>
        <Link to={'/courses'}><button className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Courses</button></Link> 
        <Link to={'/request-course'}><button className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Request a course</button></Link>
        <Link to={'/contact-us'}><button className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Contact Us</button></Link> 
        <Link to={'about'}><button className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">About</button></Link>
        </div>
        <div className="mt-auto">
          {authenticate ? (
            <div className="flex items-center space-x-4">
              <CgProfile className="text-2xl text-gray-800 dark:text-gray-200" />
              <button className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Log out</button>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
             <Link to={'/sign-in'}> <button className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Sign in</button></Link>
             <Link to={'/registration'}> <button className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">Sign up</button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(false);
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, [theme]);

  function menusetter() {
    setMenu(!menu);
  }

  function themeSetter() {
    setTheme(!theme);
  }

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center space-x-4">
        {menu ? (
          <RxCross2 onClick={menusetter} className="text-2xl cursor-pointer text-gray-800 dark:text-gray-200" />
        ) : (
          <GiHamburgerMenu onClick={menusetter} className="text-2xl cursor-pointer text-gray-800 dark:text-gray-200" />
        )}
        {menu && <MenuList authenticate={authenticate} menusetter={menusetter} />}
      </div>
      <div>
        {theme ? (
          <MdDarkMode onClick={themeSetter} className="text-2xl cursor-pointer text-gray-800 dark:text-gray-200" />
        ) : (
          <CiLight onClick={themeSetter} className="text-2xl cursor-pointer text-gray-800 dark:text-gray-200" />
        )}
      </div>
    </div>
  );
};

export default Header;
