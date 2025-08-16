import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <span onClick={scrollToTop} className={`up ${show ? 'reveal' : ''}`}>
      ▲
    </span>
  );
};

export default ScrollToTopButton;