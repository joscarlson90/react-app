import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { mockedPerformance } from "./data/performances";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Work from "./pages/work";

export default function App() {
  const [work, setWork] = useState(mockedPerformance);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}
