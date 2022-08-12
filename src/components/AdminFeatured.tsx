
import { MdMoreVert } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/components/adminFeatured.scss";

const AdminFeatured = () => {
  return (
    <div className="admin-featured">
      <div className="top">
        <h2 className="title">درآمد کل</h2>
        <MdMoreVert className="admin-icon" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={65} strokeWidth={5} text="65%" />
        </div>
        <p className="title">فروش کل امروز</p>
        <p className="amount">1900ریال</p>
        <p className="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        <div className="summary">
          <div className="item">
            <div className="item-title">هدف</div>
            <div className="item-result negative">
              <IoIosArrowDown className="admin-icon" />
              <div className="result-amount">5000ریال</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">هفته گذشته</div>
            <div className="item-result negative">
              <IoIosArrowDown className="admin-icon" />
              <div className="result-amount">5000ریال</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">ماه گذشته</div>
            <div className="item-result positive">
              <IoIosArrowUp className="admin-icon" />
              <div className="result-amount">5000ریال</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFeatured;
