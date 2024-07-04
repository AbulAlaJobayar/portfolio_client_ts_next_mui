"use client"
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate.getTime() - now;

      const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);

      if (timeDifference < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Typography variant="h4" component="div" gutterBottom>
      {days}d {hours}h {minutes}m {seconds}s
    </Typography>
  );
};

export default Countdown;