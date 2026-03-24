import "./App.css";
import { Toaster } from "react-hot-toast";
import { ViewportProvider } from "./Context/ViewportContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Resume from "./components/Resume";
import ProjectCards from "./components/ProjectCards";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <ViewportProvider>
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
          success: { iconTheme: { primary: "#4ade80", secondary: "#1a1a2e" } },
          error: { iconTheme: { primary: "#f87171", secondary: "#1a1a2e" } },
        }}
      />
      <Header />
      <main>
        <section id="about"><Body /></section>
        <section id="resume"><Resume /></section>
        <section id="projects"><ProjectCards /></section>
        <section id="contact"><ContactForm /></section>
      </main>
      <Footer />
    </ViewportProvider>
  );
}

export default App;
