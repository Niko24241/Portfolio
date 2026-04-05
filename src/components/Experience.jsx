const css = `
  .skill-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .skill-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(90,122,90,0.18) !important;
  }
`;

const SKILLS = [
{ name: "HTML", desc: "I use HTML to build the basic structure of web pages." },
{ name: "CSS", desc: "I style websites using CSS to make them look clean and responsive." },
{ name: "JavaScript", desc: "I use JavaScript to add interactivity and make websites dynamic." },
{ name: "React", desc: "I build user interfaces using React and its features like hooks and state." },
{ name: "Vite", desc: "I use Vite to run and build projects faster during development." },
{ name: "PHP", desc: "I use PHP to handle backend logic and connect to databases." },
{ name: "MongoDB", desc: "I use MongoDB to store and manage data for web applications." },
{ name: "Figma", desc: "I use Figma to design UI and plan how websites will look." },
{ name: "GitHub", desc: "I use GitHub to store my code and track changes in my projects." },
{ name: "Node.js", desc: "I use Node.js to build backend apps and handle server-side code." },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "60px 0" }}>
      <style>{css}</style>

      <h2 style={{ margin: "0 0 8px", fontSize: 50, textAlign: "center" }}>My Technical Skills</h2>
      <p style={{ color: "var(--muted)", margin: "0 0 36px", textAlign: "center", fontSize: 18 }}>
        A comprehensive overview of my technical skills and proficiency.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 700, margin: "0 auto" }}>
        {SKILLS.map((skill, i) => (
          <div key={i} className="skill-card" style={{
            padding: "24px 32px",
            borderRadius: 14,
            border: "1px solid var(--border)",
            background: "var(--panel)",
            boxShadow: "var(--shadow)"
          }}>
            <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>
              {skill.icon} {skill.name}
            </h3>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
