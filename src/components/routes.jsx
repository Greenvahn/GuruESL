import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Main from "../pages/main";
import Notfound from "../pages/notfound";

const Baseroutes = (props) => {
  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route path="*" element={<Notfound />} />
        <Route index element={<Home />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </>
  );
};

export default Baseroutes;
