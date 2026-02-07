import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme === "light" ? "light" : "";
  }, [theme]);

  return (
    <nav style={nav}>
      <h3 style={{ color: "var(--accent)" }}>Pratik</h3>

      <div style={right}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <button
          style={toggle}
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

const nav = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "25px 10%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#6d84a7",
  zIndex: 100
};

const right = {
  display: "flex",
  gap: "28px",
  alignItems: "center",
  color: "var(--subtext)"
};

const toggle = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  border: "1px solid var(--accent)",
  background: "transparent",
  color: "var(--accent)",
  cursor: "pointer",
  fontSize: "18px"
};
