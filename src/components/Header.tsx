import { useCallback } from "react";
import { MdNotificationsNone } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import useDropDown from "../hooks/useCloseDropDown";
import { MdLogout } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import "../styles/components/header.scss";
import { useLogout } from "../hooks/useFetchUser";

const Header = () => {
  const location = useLocation();
  const { wrapperRef, isOpen, toggleDropDown } = useDropDown();
  const {
    wrapperRef: wrapperNotification,
    isOpen: openNotification,
    toggleDropDown: toggleNotification,
  } = useDropDown();
  const { logoutUser } = useLogout();

  const convertLocation = useCallback((str: string) => {
    if (str === "users") return "کاربرها";
    if (str === "products") return "محصولات";
    return "داشبورد";
  }, []);

  return (
    <header className="header">
      <div className="header__right">
        <RiBankLine className="icon" />
        <span>{convertLocation(location.pathname.split("/")[1])}</span>
      </div>
      <div className="header__left" ref={wrapperRef}>
        <div ref={wrapperNotification}>
          <MdNotificationsNone className="icon" onClick={toggleNotification} />
        </div>
        <img src="/images/user.svg" alt="user" onClick={toggleDropDown} />

        {isOpen && (
          <ul className="header__left--menu user">
            <li className="header__left--menu__item">
              <div className="right">
                <img src="/images/user.svg" alt="user" />
              </div>
              <div className="left">
                <p>سینا بابا احمدی</p>
                <p>فروشگاه نام</p>
              </div>
            </li>
            <li className="header__left--menu__item">
              <Link to="/products">
                <BiStore className="icon" />
                محصولات
              </Link>
            </li>
            <li className="header__left--menu__item" onClick={logoutUser}>
              <a>
                <MdLogout className="icon" />
                خروج
              </a>
            </li>
          </ul>
        )}

        {openNotification && (
          <ul className="header__left--menu notifications">
            <li className="header__left--menu__item">
              پیامی ندارید
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
