import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ xTarget: 0, yTarget: 0 });

  const updateMousePosition = ev => {
    setMousePosition({ xTarget: ev.clientX, yTarget: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}

export default useMousePosition;
