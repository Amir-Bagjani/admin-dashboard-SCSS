import AdminChart from "../components/AdminChart";
import AdminFeatured from "../components/AdminFeatured";
import AdminTable from "../components/AdminTable";
import AdminWidget from "../components/AdminWidget";
import Layout from "../components/Layout";
import "../styles/pages/homePage.scss";

const Home = () => {
  return (
    <Layout>
      <div className="home-page">
        <div className="home-page__widgets">
          <AdminWidget type="user" />
          <AdminWidget type="order" />
          <AdminWidget type="earning" />
          <AdminWidget type="balance" />
        </div>
        <div className="home-page__charts">
          <AdminFeatured />
          <AdminChart aspect={2 / 1} title="درآمد 6 ماه گذشته" />
        </div>
        <div className="home-page__list-container">
          <p className="list-title">آخرین تراکنشها</p>
          <AdminTable />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
