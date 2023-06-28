import React, { useState, useEffect } from 'react';


const Timer = () => {
   // Timer.js
  const countdownDate = new Date('December 17, 2023 12:00:00').getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Timer">
      <h2>Temps restant avant la houppa : </h2>
      <div>
        <div>{days}</div>
        <span>Days</span>
      </div>
      <div>
        <div>{hours}</div>
        <span>Hours</span>
      </div>
      <div>
        <div>{minutes}</div>
        <span>Minutes</span>
      </div>
    </div>
  );
}

export default Timer;

