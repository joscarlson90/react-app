import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Work from "./pages/work";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
