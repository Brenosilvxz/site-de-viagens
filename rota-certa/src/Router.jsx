import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Destinos from "./Pages/Destinos";
import Experiencias from "./Pages/Experiencias";
import Sobre from "./Pages/Sobre";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Planejar from "./Pages/Planejar";
import NotFound from "./Pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/planejar" element={<Planejar />} />
        <Route path="/planejar" element={<Planejar />} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
