import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { stageImages } from "./data/gallery";
import { workData } from "./data/work";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Work from "./pages/work";
import Contact from "./pages/contact";

export default function App() {
  const [gallery] = useState(stageImages);
  const [work] = useState(workData);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work work={work} />} />
          <Route path="gallery" element={<Gallery gallery={gallery} />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
