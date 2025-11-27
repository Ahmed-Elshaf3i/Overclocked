import { FC } from 'react';
import { CountdownTime } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  time: CountdownTime;
  formatTimeValue: (value: number) => string;
  labels?: {
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };
}

/**
 * Countdown timer display component
 */
export const CountdownTimer: FC<CountdownTimerProps> = ({
  time,
  formatTimeValue,
  labels = {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
  },
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="text-center">
        <div className="text-xs font-medium mb-1">{labels.days}</div>
        <div className="text-3xl font-bold">{formatTimeValue(time.days)}</div>
      </div>
      <span className="text-accent text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="text-xs font-medium mb-1">{labels.hours}</div>
        <div className="text-3xl font-bold">{formatTimeValue(time.hours)}</div>
      </div>
      <span className="text-accent text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="text-xs font-medium mb-1">{labels.minutes}</div>
        <div className="text-3xl font-bold">{formatTimeValue(time.minutes)}</div>
      </div>
      <span className="text-accent text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="text-xs font-medium mb-1">{labels.seconds}</div>
        <div className="text-3xl font-bold">{formatTimeValue(time.seconds)}</div>
      </div>
    </div>
  );
};

