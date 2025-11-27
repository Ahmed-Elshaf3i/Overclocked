import { FC } from 'react';

// SectionHeader component props interface
interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  action?: React.ReactNode;
}

// Reusable Section Header with red bar accent
export const SectionHeader: FC<SectionHeaderProps> = ({
  subtitle,
  title,
  action,
}) => {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        {/* Subtitle with red bar */}
        {subtitle && (
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-10 bg-accent rounded" />
            <span className="text-accent font-semibold">{subtitle}</span>
          </div>
        )}
        
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">{title}</h2>
      </div>
      
      {/* Optional Action (e.g., View All button) */}
      {action && <div>{action}</div>}
    </div>
  );
};

