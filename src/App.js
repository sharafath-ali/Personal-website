import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import { ViewportProvider } from "./Context/ViewportContext";

function App() {
  return (
    <>
      <ViewportProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ViewportProvider>
    </>
  );
}

export default App;
