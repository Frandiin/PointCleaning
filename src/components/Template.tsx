import { Outlet, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { SideBar } from "./SideBar";

export const Template = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));

      element?.scrollIntoView();
    } else document.getElementById("main")?.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="overflow-hidden">
      <Header show={show} setShow={setShow} />
      <SideBar show={show} setShow={setShow} />

      <main id="main" className="md:mt-[90px] mt-[50px]  ">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
