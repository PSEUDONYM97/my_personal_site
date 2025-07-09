'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <Logo />
      <nav className="flex gap-8">
        <Link 
          href="/" 
          className={`hover:text-blue-400 transition-colors relative group ${isActive("/") ? "text-white font-medium" : "text-gray-400"}`}
        >
          <span>Home</span>
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ${isActive("/") ? "w-full" : "group-hover:w-full"}`}></span>
        </Link>
        <Link 
          href="/about" 
          className={`hover:text-blue-400 transition-colors relative group ${isActive("/about") ? "text-white font-medium" : "text-gray-400"}`}
        >
          <span>About</span>
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ${isActive("/about") ? "w-full" : "group-hover:w-full"}`}></span>
        </Link>
        <Link 
          href="/contact" 
          className={`hover:text-blue-400 transition-colors relative group ${isActive("/contact") ? "text-white font-medium" : "text-gray-400"}`}
        >
          <span>Contact</span>
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ${isActive("/contact") ? "w-full" : "group-hover:w-full"}`}></span>
        </Link>
      </nav>
    </header>
  );
} 