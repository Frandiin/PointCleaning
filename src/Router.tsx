import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Template } from "./components/Template";
import { About } from "./components/About";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";
import { Services } from "./components/Services";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Outlet />}>
        <Routes>
          <Route element={<Template />}>
            <Route element={<Home />} path="/" />
            <Route element={<Services />} path="/services" />
            <Route element={<About />} path="/about" />
          </Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
