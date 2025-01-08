import React from 'react';

const HeaderSection = () => {
  const targetDate = new Date("2025-01-08T20:00:00"); // January 8, 8 PM
  const [elapsedTime, setElapsedTime] = useState("");

  useEffect(() => {
    const updateElapsedTime = () => {
      const now = new Date();
      const diff = Math.max(0, now - targetDate);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setElapsedTime(`${hours} hours ${minutes} minutes and ${seconds} seconds`);
    };

    updateElapsedTime(); // Update immediately
    const interval = setInterval(updateElapsedTime, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  
  return (
    <header className="page-view">
      <h1>The journey started on 8 Jan 2025, 20:00</h1>
      <h1>{elapsedTime}</h1>
    </header>
  );
}

export default HeaderSection;
