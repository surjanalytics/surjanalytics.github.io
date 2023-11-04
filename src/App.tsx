import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "src/components/modules/Alert";
import Footer from "src/components/modules/Footer";
import Home from "src/components/pages/Home";
import Nav from "src/components/modules/Nav";
import NotFound from "src/components/pages/NotFound";
import About from "src/components/pages/About";
import Upload from "src/components/pages/Upload";

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Alert />
    <Footer />
  </BrowserRouter>
);

export default App;
