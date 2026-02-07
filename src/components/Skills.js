import {
  SiMongodb,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiPostman,
  SiDocker,
  SiTypescript
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" style={section}>
      <h2 style={title}>Skills & Technologies</h2>

      <div style={grid}>
        <Skill icon={<SiMongodb />} label="MongoDB" />
        <Skill icon={<SiJavascript />} label="JavaScript" />
        <Skill icon={<SiReact />} label="React" />
        <Skill icon={<SiNodedotjs />} label="Node.js" />
        <Skill icon={<SiExpress />} label="Express.js" />
        <Skill icon={<SiMysql />} label="MySQL" />
        <Skill icon={<SiPostgresql />} label="Postgres" />
        <Skill icon={<SiRedis />} label="Redis" />
        <Skill icon={<SiPostman />} label="Postman" />
        <Skill icon={<SiDocker />} label="Docker" />
        <Skill icon={<SiTypescript />} label="TypeScript" />
      </div>
    </section>
  );
}

function Skill({ icon, label }) {
  return (
    <div style={card}>
      <div style={iconStyle}>{icon}</div>
      <p style={text}>{label}</p>
    </div>
  );
}

const section = {
  padding: "120px 10%",
  textAlign: "center"
};

const title = {
  fontSize: "2.5rem",
  marginBottom: "60px",
  color: "#c7d2fe"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "35px",
  justifyItems: "center"
};

const card = {
  width: "140px",
  height: "140px",
  background: "var(--card)",
  backdropFilter: "blur(10px)",
  borderRadius: "18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 40px rgba(0,0,0,0.4)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease"
};

const iconStyle = {
  fontSize: "42px",
  marginBottom: "12px",
  color: "#ffffff"
};


const text = {
  color: "#e5e7eb",
  fontSize: "14px"
};

