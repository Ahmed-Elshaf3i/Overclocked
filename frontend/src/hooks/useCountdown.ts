import { useState, useEffect, useCallback } from 'react';
import { TIMING } from '@/constants';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface UseCountdownOptions {
  initialTime: CountdownTime;
  onComplete?: () => void;
  updateInterval?: number;
}

/**
 * Custom hook for countdown timer functionality
 * @param options - Configuration options for the countdown timer
 * @returns Current countdown time and control functions
 */
export const useCountdown = (options: UseCountdownOptions) => {
  const {
    initialTime,
    onComplete,
    updateInterval = TIMING.COUNTDOWN_UPDATE_INTERVAL,
  } = options;

  const [time, setTime] = useState<CountdownTime>(initialTime);
  const [isComplete, setIsComplete] = useState(false);

  // Reset countdown to initial time
  const reset = useCallback(() => {
    setTime(initialTime);
    setIsComplete(false);
  }, [initialTime]);

  // Main countdown logic
  useEffect(() => {
    if (isComplete) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        // Countdown logic
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                // Countdown complete
                setIsComplete(true);
                onComplete?.();
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [isComplete, onComplete, updateInterval]);

  // Format time value with leading zero
  const formatTimeValue = (value: number): string => {
    return String(value).padStart(2, '0');
  };

  return {
    time,
    isComplete,
    reset,
    formatTimeValue,
    formattedTime: {
      days: formatTimeValue(time.days),
      hours: formatTimeValue(time.hours),
      minutes: formatTimeValue(time.minutes),
      seconds: formatTimeValue(time.seconds),
    },
  };
};

