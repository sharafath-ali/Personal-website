import "./App.css";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import { ViewportProvider } from "./Context/ViewportContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#1a1a2e",
            color: "#f0f0ff",
            border: "1px solid rgba(108, 99, 255, 0.25)",
            borderRadius: "10px",
            fontSize: "0.87rem",
            fontWeight: "600",
            fontFamily: "'Inter', 'Poppins', sans-serif",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            padding: "12px 16px",
          },
          success: {
            iconTheme: { primary: "#4ade80", secondary: "#1a1a2e" },
          },
          error: {
            iconTheme: { primary: "#f87171", secondary: "#1a1a2e" },
          },
        }}
      />
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
