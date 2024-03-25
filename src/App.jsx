// module
import { Routes, Route, Navigate  } from "react-router-dom";
import { useState } from "react";

//page
import Welcome from "./pages/Welcome/Welcome";
// import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";


//component
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";

export default function App() {
  const [language, setLanguage] = useState(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    if (!userLanguage.startsWith("fr")) return "en";
    return "fr";
  });

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Routes>
          <Route path="/" element={<Welcome language={language} />} />
          <Route path="/portfolio" element={<p>Portfolio</p>} />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}