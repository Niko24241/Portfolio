import { PROJECTS } from "../data/portfolioData";

const css = `
  .card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 48px rgba(90,122,90,0.20) !important;
  }
`;

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "70px 0" }}>
      <style>{css}</style>
      <h2 style={{ margin: "0 0 10px", fontSize: 50, fontWeight: 800 }}>Projects</h2>
      <p style={{ color: "var(--muted)", margin: "0 0 32px", fontSize: 25 }}>A selection of things I've built and designed.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
        {PROJECTS.map(p => (
          <div key={p.id} className="card" style={{ borderRadius: 18, padding: 20, background: "var(--panel)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>

            <div style={{ height: 210, borderRadius: 12, overflow: "hidden", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>

            <h3 style={{ margin: "16px 0 8px", fontSize: 35, fontWeight: 700 }}>{p.title}</h3>
            <p style={{ fontSize: 20, color: "var(--muted)", margin: "16px 0", lineHeight: 1.6 }}>{p.desc}</p>

          </div>
        ))}
      </div>
    </section>
  );
}
