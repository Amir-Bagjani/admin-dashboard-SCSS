import { useState } from "react";
import { useLogout } from "../hooks/useFetchUser";
import useTheme from "../hooks/useTheme";
import { Link, NavLink } from "react-router-dom";
import { MdLogout, MdMenu } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiUser, BiStore } from "react-icons/bi";
import "../styles/components/sidebar.scss";


const Sidebar = () => {
  const IWidth = window.innerWidth;
  const [menu, setMenu] = useState(() => (IWidth > 700 ? false : true));
  const { lightTheme, darkTheme }= useTheme()
  const {logoutUser} = useLogout()

  return (
    <nav className={menu ? "sidebar__nav active" : "sidebar__nav"}>
      <div className="sidebar__nav--wrapper">
        <div className="sidebar__nav--top">
          <Link to="/">
            <h1 className="sidebar__nav--top--logo">Your Logo</h1>
          </Link>
          <MdMenu className="icon" onClick={() => setMenu((pre) => !pre)} />
        </div>

        <div className="sidebar__nav--user">
          <div className="image">
            <img src="/images/user.svg" alt="user" />
          </div>
          <h3 className="username">سینا بابا احمدی</h3>
        </div>

        <ul className="sidebar__nav--list">
          <li className="sidebar__nav--list__list-item" title="داشبورد">
            <NavLink to="/">
              <AiOutlineAppstore className="icon" />
              <span>داشبورد</span>
            </NavLink>
          </li>
          <li className="sidebar__nav--list__list-item" title="کابرها">
            <NavLink to="/users">
              <BiUser className="icon" />
              <span>کاربرها</span>
            </NavLink>
          </li>
          <li className="sidebar__nav--list__list-item" title="محصولات">
            <NavLink to="/products">
              <BiStore className="icon" />
              <span>محصولات</span>
            </NavLink>
          </li>
          <li className="sidebar__nav--list__list-item" title="خروج" onClick={logoutUser}>
            <a>
              <MdLogout className="icon" />
              <span >خروج</span>
            </a>
          </li>
          <hr className="divider" />
        </ul>

        <div className="sidebar__nav--bottom">
          <span className="color-option" onClick={lightTheme}></span>
          <span className="color-option" onClick={darkTheme}></span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
