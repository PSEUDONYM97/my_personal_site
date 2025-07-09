import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  withContainer?: boolean;
  alternateBg?: boolean;
};

export default function Section({
  id,
  title,
  label,
  children,
  className = '',
  containerClassName = '',
  withContainer = true,
  alternateBg = false,
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`mb-24 ${alternateBg ? 'bg-[#0e1117]/20' : ''} ${className}`}
    >
      {/* Title and label - reversed order */}
      {(label || title) && (
        <div className="mb-12">
          {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
          {label && (
            <div className="text-sm text-blue-400 font-mono uppercase tracking-wider">{label}</div>
          )}
        </div>
      )}
      
      {/* Content */}
      {withContainer ? (
        <div className={`bg-[#0e1117]/50 p-8 rounded-lg border border-gray-800/30 shadow-sm ${containerClassName}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionGrid({ 
  children, 
  columns = 3,
  className = '' 
}: { 
  children: ReactNode; 
  columns?: 1 | 2 | 3;
  className?: string;
}) {
  const cols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  };
  
  return (
    <div className={`grid ${cols[columns]} gap-6 ${className}`}>
      {children}
    </div>
  );
}

export function Card({ 
  children, 
  className = '',
  icon,
  title,
  withHoverEffect = true,
  link,
}: { 
  children: ReactNode; 
  className?: string;
  icon?: string;
  title?: string;
  withHoverEffect?: boolean;
  link?: string;
}) {
  const cardContent = (
    <div 
      className={`bg-[#0e1117]/50 p-6 rounded-lg border border-gray-800/30 shadow-sm ${withHoverEffect ? 'hover:border-blue-500/30 transition-all duration-300' : ''} ${className}`}
    >
      {(icon || title) && (
        <div className="flex items-start mb-4">
          {icon && <div className="mr-3 text-blue-400 text-xl">{icon}</div>}
          {title && <h3 className="text-xl font-semibold text-slate-300">{title}</h3>}
        </div>
      )}
      <div className="text-slate-400 leading-relaxed">
        {children}
      </div>
    </div>
  );
  
  if (link) {
    return (
      <a href={link} className="block">
        {cardContent}
      </a>
    );
  }
  
  return cardContent;
}

export function TextBlock({
  children,
  className = '',
  highlight = false,
}: {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <p className={`${highlight ? 'text-slate-300' : 'text-slate-400'} leading-relaxed mb-6 ${className}`}>
      {children}
    </p>
  );
}

export function CTABox({
  title,
  description,
  buttonText,
  buttonHref,
  className = '',
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}) {
  return (
    <div className={`bg-gradient-to-b from-[#13161d] to-[#1a1d24] p-8 md:p-12 rounded-xl text-center shadow-lg shadow-black/30 border border-slate-800/20 shadow-[0_-4px_12px_rgba(59,130,246,0.03)] max-w-md mx-auto ${className}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <a 
        href={buttonHref} 
        className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition transform hover:scale-105 shadow-md shadow-blue-500/20 border border-blue-500/30"
      >
        {buttonText}
      </a>
    </div>
  );
} 