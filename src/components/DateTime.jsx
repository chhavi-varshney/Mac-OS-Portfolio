import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const day = now.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
      const month = now.toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
      const date = now.getDate();

      const time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      setDateTime(`${day} ${month} ${date} ${time}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{dateTime}</p>;
};

export default DateTime;
