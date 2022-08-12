import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
//component
import Private from "./components/Private";
//pages
import LoginPage from "./pages/LoginPage";
const  Home = lazy(() => import("./pages/Home"));
const  List = lazy(() => import("./pages/List"));
const  NewProduct = lazy(() => import("./pages/NewProduct"));
const  NotFound = lazy(() => import("./pages/NotFound"));
const  UserDetails = lazy(() => import("./pages/UserDetails"));

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/">
          <Route index element={<Private><Home /></Private>} />
          <Route path="users" element={<Private><List /></Private>} />
          <Route path="users/:userId" element={<Private><UserDetails /></Private>} />
          <Route path="products" element={<Private><List /></Private>} />
          <Route path="products/:productId" element={<Private><UserDetails /></Private>} />
          <Route path="products/new" element={<Private><NewProduct /></Private>} />
        </Route>
        <Route path="*" element={<Private><NotFound /></Private>} />
      </Routes>
    </div>
  );
}

export default App;
