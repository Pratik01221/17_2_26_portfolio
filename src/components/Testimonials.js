// import React from 'react';

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: "John Doe",
//       role: "Project Manager",
//       message: "Pratik delivered exceptional work on our project. His attention to detail and technical skills are outstanding.",
//       avatar: "https://via.placeholder.com/60"
//     },
//     {
//       name: "Jane Smith",
//       role: "Designer",
//       message: "Working with Pratik was a great experience. He brings creativity and professionalism to every task.",
//       avatar: "https://via.placeholder.com/60"
//     },
//     {
//       name: "Mike Johnson",
//       role: "Developer",
//       message: "Pratik's code is clean, efficient, and well-documented. Highly recommend for any development project.",
//       avatar: "https://via.placeholder.com/60"
//     }
//   ];

//   return (
//     <section style={sectionStyle}>
//       <h2 style={titleStyle}>Testimonials</h2>
//       <div style={gridStyle}>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial-card" style={cardStyle}>
//             <img src={testimonial.avatar} alt={testimonial.name} style={avatarStyle} />
//             <p style={messageStyle}>"{testimonial.message}"</p>
//             <h4 style={nameStyle}>{testimonial.name}</h4>
//             <p style={roleStyle}>{testimonial.role}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// const sectionStyle = {
//   padding: "90px 10%",
//   textAlign: "center",
//   background: "var(--bg)"
// };

// const titleStyle = {
//   fontSize: "2.5rem",
//   marginBottom: "60px",
//   color: "var(--accent)"
// };

// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//   gap: "40px"
// };

// const cardStyle = {
//   background: "var(--card)",
//   padding: "30px",
//   borderRadius: "12px",
//   boxShadow: "0 0 20px rgba(0,0,0,0.1)",
//   transition: "transform 0.3s ease",
//   cursor: "pointer"
// };

// const avatarStyle = {
//   width: "60px",
//   height: "60px",
//   borderRadius: "50%",
//   marginBottom: "20px"
// };

// const messageStyle = {
//   color: "var(--subtext)",
//   fontStyle: "italic",
//   marginBottom: "20px",
//   lineHeight: "1.6"
// };

// const nameStyle = {
//   color: "var(--text)",
//   marginBottom: "5px"
// };

// const roleStyle = {
//   color: "var(--accent)",
//   fontSize: "14px"
// };