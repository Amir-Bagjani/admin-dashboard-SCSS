import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../styles/components/layout.scss";
import Background from "./Background";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="layout__main">
      <Sidebar />
      <section className="layout__main--section">
        <Background />
        <div className="layout__main--section__content">
          <Header />
          {children}
        </div>
      </section>
    </main>
  );
};

export default Layout;
