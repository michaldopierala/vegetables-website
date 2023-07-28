import React, { useState, useRef, useEffect } from 'react';

const Container = () => {
  const [color, setColor] = useState('red');
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setColor('blue');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '500px',
        height: '500px',
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Container;