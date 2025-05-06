import "./index.css";
import { Router } from "./Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header show={showMobileMenu} setShow={setShowMobileMenu} />
        <div className="flex-1">
          <Router />
        </div>
        <Footer />
      </div>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
