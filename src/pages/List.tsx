import AdminDatatable from "../components/AdminDatatable";
import Layout from "../components/Layout";
import "../styles/pages/listPage.scss";

const List = () => {
  return (
    <Layout>
      <div className="list-page">
        <AdminDatatable />
      </div>
    </Layout>
  );
};

export default List;
