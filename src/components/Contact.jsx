import { CONTACT } from "../data/portfolioData";

const css = `
  .contact-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }
  .contact-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(90,122,90,0.18) !important;
    background: var(--accent-light) !important;
  }
`;

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "60px 0" }}>
      <style>{css}</style>
      <h2 style={{ margin: "0 0 8px", fontSize: 50 }}>Get in Touch</h2>
      <p style={{ color: "var(--muted)", fontSize: 20, maxWidth: 500, margin: "0 0 28px", lineHeight: 1.7 }}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
         Feel free to reach out through my Email below!
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
        {CONTACT.map((c, i) => (
          <a key={i} href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
            className="contact-card"
            style={{ display: "block", textAlign: "center", padding: "22px 16px", borderRadius: 14, border: "1px solid var(--border)", background: "var(--panel)", boxShadow: "var(--shadow)", color: "var(--text)" }}>
            <div style={{ fontSize: 30, marginBottom: 8 }}>{c.icon}</div>
            <h3 style={{ margin: "0 0 6px", fontSize: 25 }}>{c.label}</h3>
            <p style={{ margin: 0, color: "var(--accent1)", fontSize: 20, fontWeight: 600 }}>{c.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
