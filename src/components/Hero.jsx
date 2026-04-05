export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{ padding: "80px 0 60px", display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>

      {}
      <div style={{ flex: 1, minWidth: 340 }}>
        <div style={{ display: "inline-block", padding: "8px 18px", borderRadius: 999, border: "1px solid var(--border)", background: "var(--accent-light)", color: "var(--accent1)", fontSize: 22, marginBottom: 26 }}>
          🌿 Welcome to my portfolio
        </div>

        <h1 style={{ margin: "0 0 18px", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.05, fontWeight: 800 }}>
          Hi, I'm{" "}
          <span style={{ background: "linear-gradient(90deg, var(--accent1), var(--accent2))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            Nikki Louise Ang Lee
          </span>
        </h1>

        <p style={{ color: "var(--muted)", maxWidth: 600, marginBottom: 32, fontSize: 21, lineHeight: 1.75 }}>
          A 2nd-year IT student at Western Institute of Technology, passionate about crafting intuitive and delightful user experiences.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button onClick={() => go("projects")} style={{ padding: "12px 28px", borderRadius: 12, background: "var(--accent1)", color: "#fff", border: "none", fontWeight: 600, fontSize: 20 }}>
            View Projects →
          </button>
          <button onClick={() => go("contact")} style={{ padding: "12px 28px", borderRadius: 12, border: "1.5px solid var(--accent1)", color: "var(--accent1)", background: "transparent", fontWeight: 500, fontSize: 20 }}>
            Get in Touch
          </button>
        </div>
      </div>

      {}
      <div style={{ width: 440, minWidth: 280 }}>
        <div style={{ borderRadius: 24, padding: 18, border: "1px solid var(--border)", background: "var(--panel)", textAlign: "center" }}>
          <img src="Nikki.jpeg" alt="Nikki Louise Ang Lee" style={{ width: "100%", borderRadius: 16 }} />
        </div>
      </div>

    </section>
  );
}
