import React from 'react';
import Link from 'next/link';

type LogoProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  withLink?: boolean;
};

export default function Logo({ className = "", size = "large", withLink = true }: LogoProps) {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-5xl",
  };
  
  const logoContent = (
    <div className={`relative font-bold tracking-tight ${sizeClasses[size]}`}>
      <span className="leading-none">{`{`}</span>
      <span className="px-1.5">jw</span>
      <span className="leading-none">{`}`}</span>
    </div>
  );
  
  if (withLink) {
    return (
      <Link href="/" className={`inline-block ${className}`}>
        {logoContent}
      </Link>
    );
  }
  
  return (
    <div className={`inline-block ${className}`}>
      {logoContent}
    </div>
  );
} 