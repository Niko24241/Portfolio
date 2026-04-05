const css = `
  .skill-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .skill-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(90,122,90,0.18) !important;
  }
  .skill-bar-fill {
    height: 6px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--accent1), var(--accent2));
    margin-top: 6px;
    transition: width 0.6s ease;
  }
`;

const SKILLS = [
  {
    category: "Frontend Development",
    icon: "🖥️",
    items: [
      { name: "HTML",       level: 90 },
      { name: "CSS",        level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React.js",   level: 75 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    items: [
      { name: "Node.js",    level: 70 },
      { name: "Express.js", level: 87 },
      { name: "MongoDB",    level: 89 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    items: [
      { name: "Git",    level: 80 },
      { name: "GitHub", level: 100 },
      { name: "Figma",  level: 100 },
      { name: "Vite",   level: 75 },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "60px 0" }}>
      <style>{css}</style>

      <h2 style={{ margin: "0 0 8px", fontSize: 50, textAlign: "center" }}>Skills & Tech Stack</h2>
      <p style={{ color: "var(--muted)", margin: "0 0 36px", textAlign: "center", fontSize: 25 }}>
        A comprehensive overview of my technical skills and proficiency.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {SKILLS.map((group, i) => (
          <div key={i} className="skill-card" style={{ padding: 50, borderRadius: 14, border: "1px solid var(--border)", background: "var(--panel)", boxShadow: "var(--shadow)" }}>

            {}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{ fontSize: 35 }}>{group.icon}</span>
              <h3 style={{ margin: 0, fontSize: 30, fontWeight: 700 }}>{group.category}</h3>
            </div>

            {}
            {group.items.map((skill, j) => (
              <div key={j} style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20 }}>
                  <span style={{ color: "var(--text)", fontWeight: 500 }}>{skill.name}</span>
                  <span style={{ color: "var(--muted)", fontSize: 20 }}>{skill.level}%</span>
                </div>
                {}
                <div style={{ height: 6, borderRadius: 999, background: "var(--accent-light)", marginTop: 6 }}>
                  <div className="skill-bar-fill" style={{ width: skill.level + "%" }} />
                </div>
              </div>
            ))}

          </div>
        ))}
      </div>
    </section>
  );
}
