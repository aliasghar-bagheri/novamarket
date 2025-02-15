import clsx from 'clsx';

interface CircularProgressProps {
  percentage: number;
  width?: number;
  height?: number;
  className?: string;
}

const CircularProgress = ({ className = '', percentage }: CircularProgressProps) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      viewBox="0 0 120 120"
      className={clsx('w-9 h-9', className)}
    >
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="transparent"
        strokeWidth={strokeWidth}
        className="stroke-gray-200"
      />
      <circle
        cx="60"
        cy="60"
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
        className="stroke-primary-500 fill-transparent transition-all duration-300 ease-in-out"
      />
    </svg>
  );
};

export default CircularProgress;
