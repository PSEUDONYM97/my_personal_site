import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  id: string;
  label: string;
};

type MobileNavProps = {
  items: NavItem[];
};

const MobileNav = ({ items }: MobileNavProps) => {
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  // Navigation items based on current page
  let navItems = [];
  
  if (pathname === '/about') {
    navItems = [
      { label: 'story', href: '#story' },
      { label: 'beliefs', href: '#beliefs' },
      { label: 'tools', href: '#tools' },
      { label: 'services', href: '#services' },
      { label: 'approach', href: '#approach' },
      { label: 'now', href: '#now' },
    ];
  } else if (pathname === '/contact') {
    navItems = [
      { label: 'contact', href: '#contact' },
      { label: 'process', href: '#process' },
      { label: 'availability', href: '#availability' },
    ];
  } else {
    // Homepage
    navItems = [
      { label: 'intro', href: '#intro' },
      { label: 'values', href: '#values' },
      { label: 'work', href: '#work' },
      { label: 'beyond', href: '#beyond' },
      { label: 'contact', href: '#contact' },
    ];
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0e1117]/95 backdrop-blur-sm border-t border-gray-800/30 shadow-lg shadow-black/20 md:hidden z-50">
      <div className="flex overflow-x-auto py-2 px-2 scrollbar-hide">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex-shrink-0 flex items-center px-4 py-2 text-sm font-mono transition-colors ${
              activeSection === item.label
                ? 'text-blue-400'
                : 'text-slate-400 hover:text-slate-300'
            }`}
            onClick={(e) => {
              if (item.href.startsWith('#')) {
                e.preventDefault();
                const element = document.getElementById(item.label);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            <span className="whitespace-nowrap text-xs">//{' '}{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav; 