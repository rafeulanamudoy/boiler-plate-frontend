import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function Main() {
  return (
    <div>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <div className="flex-grow  ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
