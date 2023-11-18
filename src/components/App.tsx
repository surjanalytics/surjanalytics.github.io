import Nav from "src/components/Nav";
import About from "src/components/About";
import Home from "src/components/Home";
import Projects from "src/components/Projects";
import Contact from "src/components/Contact";
import Footer from "src/components/Footer";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

const Main = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname !== "/") {
      navigate("/");
    }
  }, [pathname, navigate]);
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
