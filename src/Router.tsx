import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Template } from "./components/Template";
import { About } from "./components/About";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Outlet />}>
        <Routes>
          <Route element={<Template />}>
            <Route element={<Home />} path="/" />

            <Route element={<About />} path="/about" />
          </Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
