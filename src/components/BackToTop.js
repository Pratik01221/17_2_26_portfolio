import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} style={buttonStyle}>
          ↑
        </button>
      )}
    </>
  );
}

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'var(--accent)',
  color: 'var(--text)',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  transition: 'all 0.3s ease',
  zIndex: 1000
};