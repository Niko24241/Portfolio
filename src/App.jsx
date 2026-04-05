import { useState, useEffect } from "react";
import Header     from "./components/Header";
import Hero       from "./components/Hero";
import Projects   from "./components/Projects";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import Background   from "./components/Background";
import { globalStyle, lightVars, darkVars } from "./styles/variables";

export default function App() {
  const [dark, setDark]     = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Lato:wght@400;500;700&display=swap";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.4 }
    );
    ["home", "projects", "experience", "contact"].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{globalStyle + (dark ? darkVars : lightVars)}</style>

      {}
      {dark ? <Background /> : (
        <div style={{ position: "fixed", inset: 0, zIndex: -1, background: "radial-gradient(ellipse at 20% 10%, rgba(138,171,110,0.2) 0%, transparent 60%), #f5f0e8" }} />
      )}

      <Header dark={dark} setDark={setDark} active={active} />

      <main style={{ maxWidth: "100%", padding: "0 60px" }}>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
