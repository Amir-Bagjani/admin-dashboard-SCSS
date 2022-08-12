import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineMonetizationOn,
  MdOutlineShoppingCart,
} from "react-icons/md";
import "../styles/components/adminWidget.scss";

type Data = {
  title: string;
  isMony: boolean;
  link: string;
  icon: ReactNode;
};

let data: Data = {
  title: "",
  isMony: false,
  link: "",
  icon: <></>,
};
const AdminWidget = ({ type }: { type: string }) => {

  switch (type) {
    case "user":
      data = {
        title: "کاربران",
        isMony: false,
        link: "مشاهده همه کاربران",
        icon: (
          <BsPerson
            className="admin-icon"
            style={{ color: `crimson`, backgroundColor: `rgba(255,0,0,0.2)` }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "سفارشات",
        isMony: false,
        link: "مشاهده همه سفارشات",
        icon: (
          <MdOutlineShoppingCart
            className="admin-icon"
            style={{
              color: `goldenrod`,
              backgroundColor: `rgba(218,165,32,0.2)`,
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "درآمد",
        isMony: true,
        link: "مشاهده درآمد خالص",
        icon: (
          <MdOutlineMonetizationOn
            className="admin-icon"
            style={{ color: `green`, backgroundColor: `rgba(0,128,0,0.2)` }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "میانگین درآمد",
        isMony: true,
        link: "مشاهده جزئیات",
        icon: (
          <MdOutlineAccountBalanceWallet
            className="admin-icon"
            style={{ color: `purple`, backgroundColor: `rgba(128,0,128,0.2)` }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="admin-widget">
      <div className="right">
        <div className="title">{data.title}</div>
        <div className="counter">{data.isMony && "ریال"} 10000</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="left">
        <div className="percentage positive">
          20%
          <IoIosArrowUp />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default AdminWidget;
