import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/pages/notFoundPage.scss";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="notfound-page">
        <div className="site">
          <div className="sketch">
            <div className="bee-sketch red"></div>
            <div className="bee-sketch blue"></div>
          </div>

          <h1>
            404:
            <small>Page Not Found</small>
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
