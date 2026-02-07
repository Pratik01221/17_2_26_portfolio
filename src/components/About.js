export default function About() {
  return (
    <section style={aboutSection} id="about">

      {/* LEFT */}
      <div style={card}>
        <h3 style={smallTitle}>Who I Am</h3>
        <p style={text}>
          I’m a developer who enjoys turning complex problems into simple,
          beautiful and intuitive solutions. I care deeply about clean code
          and user experience.
        </p>
      </div>

      {/* CENTER */}
      <div style={centerCard}>
        <h2 style={quote}>
          “I don’t just write code, <br /> I build experiences.”
        </h2>
      </div>

      {/* RIGHT */}
      <div style={card}>
        <h3 style={smallTitle}>What I Bring</h3>
        <ul style={list}>
          <li>⚛️ React-focused development</li>
          <li>🎯 Clean UI & UX thinking</li>
          <li>🚀 Project-driven learning</li>
        </ul>
      </div>

    </section>
  );
}

/* ---------- STYLES ---------- */

const aboutSection = {
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr 1fr",
  gap: "40px",
  padding: "120px 10%",
  alignItems: "center"
};

const card = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(12px)",
  padding: "35px",
  borderRadius: "16px",
  boxShadow: "0 0 40px rgba(0,0,0,0.3)"
};

const centerCard = {
  textAlign: "center"
};

const smallTitle = {
  color: "#2dd4bf",
  marginBottom: "15px",
  fontSize: "18px"
};

const text = {
  color: "#cbd5f5",
  lineHeight: "1.7"
};

const quote = {
  fontSize: "2.2rem",
  color: "#93c5fd",
  lineHeight: "1.3"
};

const list = {
  listStyle: "none",
  padding: 0,
  color: "#cbd5f5",
  lineHeight: "2"
};
