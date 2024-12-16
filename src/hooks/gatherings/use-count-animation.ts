import { useEffect, useState } from 'react';

export function useCountAnimation(
  targetValue: number,
  duration: number = 1000,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let timeoutId: NodeJS.Timeout;

    const animate = () => {
      const currentTime = performance.now();
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);

      if (progress < 1) {
        setCount(Math.floor(targetValue * progress));
        timeoutId = setTimeout(animate, 16);
      } else {
        setCount(targetValue);
      }
    };

    setCount(0);
    startTime = null;
    timeoutId = setTimeout(animate, 16);

    return () => clearTimeout(timeoutId);
  }, [targetValue, duration]);

  return count;
}
