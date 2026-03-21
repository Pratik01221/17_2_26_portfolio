export default function Contact() {
  return (
    
    <section id="contact" style={{ padding: "50px", textAlign: "center" }}>
      <h2>Contact</h2>
      <p style={{ color: "var(--subtext)", marginBottom: "30px" }}>Get in touch with me</p>
      
      <form style={formStyle} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" style={inputStyle} required />
        <input type="email" name="email" placeholder="Your Email" style={inputStyle} required />
        <textarea name="message" placeholder="Your Message" style={textareaStyle} required></textarea>
        <button type="submit" style={submitBtn}>Send Message</button>
      </form>
      
      <div style={{ marginTop: "40px" }}>
        <p style={emailStyle}>Email: pratikgarad9822@gmail.com</p>
        <p style={emailStyle}>GitHub: github.com/pratikgarad</p>
        <a href="https://github.com/pratik01221" target="blank" rel="noopener noreferrer" style={textStyle}>GitHub Profile</a>
      </div>
    </section>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // For now, just log or alert. In real app, send to backend
  alert(`Thank you ${name}! Your message has been sent.`);
  e.target.reset();
}


const emailStyle = {
  color: "var(--contact-email)",
  textDecoration: "none",
  fontSize: "18px",
};

const textStyle = {
  color: "var(--contact-text)",
  textDecoration: "none",
  fontSize: "18px",
};

const formStyle = {
  maxWidth: "500px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  background: "var(--card)",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 0 20px rgba(0,0,0,0.1)"
};

const inputStyle = {
  padding: "12px",
  border: "1px solid var(--subtext)",
  borderRadius: "6px",
  fontSize: "16px",
  background: "var(--bg)",
  color: "var(--text)"
};

const textareaStyle = {
  padding: "12px",
  border: "1px solid var(--subtext)",
  borderRadius: "6px",
  fontSize: "16px",
  minHeight: "100px",
  background: "var(--bg)",
  color: "var(--text)",
  resize: "vertical"
};

const submitBtn = {
  padding: "12px",
  background: "var(--accent)",
  color: "var(--text)",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background 0.3s"
};