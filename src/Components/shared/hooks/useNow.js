import { useState, useEffect } from 'react';

const useNow = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    let id;

    const repaint = () => {
      setNow(Date.now());
      id = requestAnimationFrame(repaint);
    };

    repaint();

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);

  return now;
};

export default useNow;
