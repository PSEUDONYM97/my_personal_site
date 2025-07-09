'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import CornerLogo from './CornerLogo';
import Footer from './Footer';
import Logo from './Logo';
import MobileNav from './MobileNav';

type SideNavItem = {
  id: string;
  label: string;
};

type PageLayoutProps = {
  children: ReactNode;
  sideNavItems?: SideNavItem[];
  title?: string;
  subtitle?: string;
  showCornerLogo?: boolean;
};

export default function PageLayout({
  children,
  sideNavItems = [],
  title,
  subtitle,
  showCornerLogo = true,
}: PageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  
  useEffect(() => {
    if (!sideNavItems.length) return;
    
    const handleScroll = () => {
      // Find all sections and their positions
      const sections = sideNavItems
        .map(item => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter(section => section.element !== null);
      
      if (sections.length === 0) return;
      
      // Find the section closest to the viewport top
      let closestSection = sections[0];
      let closestDistance = Infinity;
      
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      }
      
      if (closestSection && closestSection.id !== activeSection) {
        setActiveSection(closestSection.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sideNavItems, activeSection]);

  // Function to scroll to section when clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <Navigation />
      {showCornerLogo && <CornerLogo />}
      
      {/* Main Content */}
      <main className="px-4 pt-12">
        <div className="max-w-5xl mx-auto">
          {/* Title Section */}
          {title && (
            <div className="mb-20 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{title}</h1>
                <div className="text-sm text-blue-400 font-mono uppercase tracking-wider opacity-90">// {pathname?.slice(1) || 'home'}</div>
                {subtitle && (
                  <div className="mt-5 max-w-3xl">
                    <p className="text-lg text-slate-300 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[12px] before:w-4 before:h-[1px] before:bg-blue-400">{subtitle}</p>
                  </div>
                )}
              </div>
              <div className="absolute -top-6 -left-12 w-20 h-20 border border-blue-500/20 rounded-lg"></div>
              <div className="absolute -bottom-8 right-10 w-16 h-16 border border-blue-500/10 rounded-lg"></div>
            </div>
          )}
          
          {/* Side Navigation */}
          {sideNavItems.length > 0 && (
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:block z-40">
              <div className="flex flex-col">
                {/* Sticky JW Logo at the top */}
                <div className="sticky top-4 mb-8 opacity-90">
                  <Link href="/" className="block transition-transform hover:scale-110 duration-300">
                    <Logo size="small" withLink={false} />
                  </Link>
                </div>
                
                <div className="space-y-6">
                  {sideNavItems.map(item => (
                    <div key={item.id}>
                      <div 
                        className={`text-slate-400 hover:text-white text-sm font-medium flex items-center cursor-pointer hover:translate-x-1 transition-transform ${activeSection === item.id ? 'text-white' : ''}`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        <span className={`w-8 h-[1px] ${activeSection === item.id ? 'bg-blue-500' : 'bg-slate-800'} mr-2`}></span>
                        <span className="font-mono">// {item.id}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Content */}
          <div className="space-y-16">
            {children}
          </div>
        </div>
      </main>
      
      {/* Mobile Navigation */}
      <MobileNav items={[]} />
      
      <Footer />
    </div>
  );
} 