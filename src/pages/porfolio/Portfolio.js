import React, { useEffect, useRef } from 'react';

function App() {
  const textRef = useRef(null);

  useEffect(() => {
    let hue = 0;
    const animation = setInterval(() => {
      hue = (hue + 1) % 360;
      const color = `hsl(${hue}, 50%, 70%)`;
      textRef.current.style.background = `linear-gradient(to right, ${color} 0%, ${color} 50%, #ffffff 50%, #ffffff 100%)`;
    }, 10);

    return () => {
      clearInterval(animation);
    };
  }, []);

  return (
    <h3 style={{ display: 'inline-block' }}>
      <span ref={textRef}  style={{color: "white", fontSize: 40, height: "100vh"}}>Affan Habib</span>
    </h3>
  );
}

export default App;
