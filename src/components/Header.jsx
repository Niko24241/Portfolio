import { useState } from "react";

const links = ["home", "projects", "experience", "contact"];

export default function Header({ dark, setDark, active }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      backdropFilter: "blur(10px)",
      background: dark ? "rgba(18,10,24,0.85)" : "rgba(245,240,232,0.85)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ padding: "0 60px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>

        {}
        <button onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: 14, background: "none", border: 0, color: "var(--text)" }}>
          <div style={{ width: 52, height: 52, borderRadius: 12, background: "linear-gradient(135deg, var(--accent1), var(--accent2))", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 18 }}>
            NA
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 25, fontWeight: 700 }}>NIKKI</div>
            <div style={{ fontSize: 17, color: "var(--muted)" }}>Designing Experiences, Not Just Screens</div>
          </div>
        </button>

        {}
        <nav style={{ display: "flex", gap: 8 }}>
          {links.map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              padding: "10px 22px", borderRadius: 12, fontSize: 20, border: "none",
              background: active === id ? "var(--accent-light)" : "transparent",
              color: active === id ? "var(--accent1)" : "var(--muted)",
              fontWeight: active === id ? 600 : 400,
              textTransform: "capitalize",
            }}>{id}</button>
          ))}
        </nav>

        {}
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => setDark(!dark)} style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--panel)", fontSize: 24 }}>
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setOpen(!open)} style={{ padding: 8, background: "none", border: 0, fontSize: 26, color: "var(--text)" }}>☰</button>
        </div>
      </div>

      {}
      {open && (
        <div style={{ borderTop: "1px solid var(--border)", padding: 14, display: "flex", flexDirection: "column", gap: 4, background: dark ? "rgba(18,10,24,0.96)" : "rgba(245,240,232,0.96)" }}>
          {links.map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{ textAlign: "left", padding: "14px 20px", borderRadius: 10, border: "none", background: active === id ? "var(--accent-light)" : "transparent", color: active === id ? "var(--accent1)" : "var(--text)", textTransform: "capitalize", fontSize: 20 }}>
              {id}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
