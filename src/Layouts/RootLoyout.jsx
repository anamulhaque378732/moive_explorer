import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLoyout = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div className="max-w-6xl mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default RootLoyout;
