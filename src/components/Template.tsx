import { Outlet, useLocation } from "react-router-dom";

import { useEffect } from "react";
import { Header } from "./Header";
import Footer from "./Footer";

export const Template = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));

      element?.scrollIntoView();
    } else document.getElementById("main")?.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="overflow-hidden">
      <Header />
      <main id="main" className="mt-[80px]  overflow-auto ">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};
