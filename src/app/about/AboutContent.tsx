'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import PageLayout from '@/components/PageLayout';
import Section, { Card, TextBlock, SectionGrid } from '@/components/ui/Section';

export default function AboutContent() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    const handleScroll = () => {
      // Find all sections and their positions
      const sections = ['story', 'beliefs', 'tools', 'services', 'approach'];
      let currentSection = '';
      let closestDistance = Infinity;
      
      // Find the section closest to the viewport top
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          // Check if section is visible (within viewport with buffer)
          if (rect.top < window.innerHeight - 100) {
            setVisibleSections(prev => new Set([...prev, section]));
          }
          
          if (distance < closestDistance) {
            closestDistance = distance;
            currentSection = section;
          }
        }
      }
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Function to scroll to section when clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sideNavItems = [
    { id: 'story', label: 'story' },
    { id: 'beliefs', label: 'beliefs' },
    { id: 'tools', label: 'tools' },
    { id: 'services', label: 'services' },
    { id: 'approach', label: 'approach' },
  ];
  
  // Animation styles
  const getAnimationStyle = (sectionId: string) => {
    return {
      opacity: visibleSections.has(sectionId) ? 1 : 0,
      transform: visibleSections.has(sectionId) ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'opacity, transform'
    };
  };

  return (
    <PageLayout
      sideNavItems={sideNavItems}
      title="About Me"
      subtitle="My background, values, and approach to building systems that last."
    >
      {/* My Story Section */}
      <Section 
        id="story" 
        title="My Story"
        label="// my journey"
        className="mb-20"
        withContainer={false}
      >
        <div className="bg-gradient-to-br from-blue-900/10 to-slate-900/50 p-8 rounded-lg border border-blue-500/20 shadow-lg" style={getAnimationStyle('story')}>
          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            I build systems that solve real problems. My work is focused on delivering practical, high-impact solutions through clear and direct communication.
          </p>
          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            I've spent years working in healthcare IT, building automation tools, and solving deep-rooted technical problems. What drives me isn't the technology itself—it's the opportunity to make complex systems work better for the people who depend on them.
          </p>
          <p className="text-xl text-slate-300 leading-relaxed">
            At home in Tilton, Illinois, I'm surrounded by what matters most: my wife and son, 
            our dogs, a leopard gecko, and a flock of chickens. This is my anchor, reminding me to build things that are grounded, useful, and honest.
          </p>
        </div>
      </Section>

      {/* Section Divider */}
      <div className="flex items-center justify-center my-16">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="mx-4 text-blue-400/50">•</div>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>

      {/* Values Section */}
      <Section 
        id="beliefs"
        title="What I Believe"
        label="// beliefs"
        className="mb-20"
        withContainer={false}
      >
        <div className="bg-slate-900/30 p-8 rounded-lg border border-slate-700/30 shadow-md" style={getAnimationStyle('beliefs')}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-900/10 p-6 rounded-lg border border-green-500/20 shadow-sm card-hover">
              <h3 className="text-xl font-semibold mb-3 text-green-400">I Build for Durability</h3>
              <p className="text-slate-400 leading-relaxed">
                I don't believe in temporary patches. I take the time to understand the root cause of a problem and build solutions that are maintainable and resilient.
              </p>
            </div>
            
            <div className="bg-blue-900/10 p-6 rounded-lg border border-blue-500/20 shadow-sm card-hover">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">I Communicate Without Jargon</h3>
              <p className="text-slate-400 leading-relaxed">
                I believe in being direct and clear. No jargon, no confusion. I explain things in plain language and keep you informed every step of the way.
              </p>
            </div>
            
            <div className="bg-purple-900/10 p-6 rounded-lg border border-purple-500/20 shadow-sm card-hover">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">I Focus on Practical Impact</h3>
              <p className="text-slate-400 leading-relaxed">
                I focus on outcomes that make a real difference. It's not about using flashy technology—it's about making things genuinely work better for people.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Divider */}
      <div className="flex items-center justify-center my-16">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
        <div className="mx-4 text-slate-400/50">•</div>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
      </div>

      {/* Technical Skills Section */}
      <Section 
        id="tools"
        title="What I Work With"
        label="// tech stack"
        className="mb-20"
        withContainer={false}
      >
        <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/60 p-8 rounded-lg border border-slate-700/40 shadow-lg" style={getAnimationStyle('tools')}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Languages & Tools */}
            <div className="space-y-2">
              <h3 className="px-4 py-3 bg-blue-900/20 text-lg font-semibold text-blue-300 rounded-t-lg border border-blue-500/20">
                Languages & Scripting
              </h3>
              
              <div className="px-4 py-3 bg-slate-900/60 border border-slate-700/30">
                <span className="font-medium text-blue-400 block">Python</span>
                <span className="text-slate-400">Automation, data processing, and AI-driven tooling</span>
              </div>
              
              <div className="px-4 py-3 bg-slate-900/40 border border-slate-700/30">
                <span className="font-medium text-blue-400 block">PowerShell</span>
                <span className="text-slate-400">Windows automation</span>
              </div>
              
              <div className="px-4 py-3 bg-slate-900/60 border border-slate-700/30">
                <span className="font-medium text-blue-400 block">JavaScript/TypeScript</span>
                <span className="text-slate-400">Web development</span>
              </div>
              
              <div className="px-4 py-3 bg-slate-900/40 border border-slate-700/30">
                <span className="font-medium text-blue-400 block">SQL</span>
                <span className="text-slate-400">Database queries</span>
              </div>
              
              <div className="px-4 py-3 bg-slate-900/60 border border-slate-700/30">
                <span className="font-medium text-blue-400 block">TCL</span>
                <span className="text-slate-400">Infor Cloverleaf scripting</span>
              </div>
              
              <div className="px-4 py-3 bg-slate-900/40 border border-slate-700/30 rounded-b-lg">
                <span className="font-medium text-blue-400 block">Git</span>
                <span className="text-slate-400">Version control</span>
              </div>
            </div>
            
            {/* Right Column - Technologies */}
            <div className="space-y-2">
              <h3 className="px-4 py-3 bg-green-900/20 text-lg font-semibold text-green-300 rounded-t-lg border border-green-500/20">
                Platforms & Protocols
              </h3>
              
              <div className="px-4 py-3 bg-slate-900/60 border border-slate-700/30">
                <span className="font-medium text-green-400 block">HL7 & Healthcare Integration</span>
                <span className="text-slate-400">Epic Bridges & Infor Cloverleaf</span>
              </div>
              
              <div className="px-4 py-3 bg-slate-900/40 border border-slate-700/30">
                <span className="font-medium text-green-400 block">AI & Automation</span>
                <span className="text-slate-400">OpenAI, Claude, n8n</span>
              </div>
              
              <div className="px-4 py-3 bg-slate-900/60 border border-slate-700/30">
                <span className="font-medium text-green-400 block">System Administration</span>
                <span className="text-slate-400">Red Hat Linux & AIX environments</span>
              </div>
              
              <div className="px-4 py-3 bg-slate-900/40 border border-slate-700/30">
                <span className="font-medium text-green-400 block">Web Development</span>
                <span className="text-slate-400">Building modern web apps with Next.js & TypeScript</span>
              </div>
              
              <div className="px-4 py-3 bg-slate-900/60 border border-slate-700/30">
                <span className="font-medium text-green-400 block">Network Protocols</span>
                <span className="text-slate-400">SFTP, REST APIs, TCP/IP</span>
              </div>

              <div className="px-4 py-3 bg-slate-900/40 border border-slate-700/30 rounded-b-lg">
                <span className="font-medium text-green-400 block">Database Systems</span>
                <span className="text-slate-400">Microsoft SQL Server</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Divider */}
      <div className="flex items-center justify-center my-16">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="mx-4 text-blue-400/50">•</div>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>

      {/* Services */}
      <Section 
        id="services"
        title="What I Build"
        label="// services"
        className="mb-20"
        withContainer={false}
      >
        <div className="space-y-10" style={getAnimationStyle('services')}>
          <div className="bg-[#0e1117]/50 p-6 rounded-lg border border-gray-800/30 shadow-sm hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="mr-3 text-blue-400 text-xl">⚙️</div>
              <h3 className="text-xl font-semibold text-slate-300">Backend Systems & Automation</h3>
            </div>
            <div className="pl-8 space-y-4">
              <p className="text-slate-400 leading-relaxed">
                Replacing manual processes with efficient, automated systems that save time and reduce errors.
              </p>
              <ul className="space-y-2 text-slate-400 pl-6">
                <li className="list-disc">
                  <span>System integrations that connect disparate tools and platforms (e.g., HL7, SFTP, APIs)</span>
                </li>
                <li className="list-disc">
                  <span>Custom workflow design to eliminate repetitive tasks and data entry</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1c2330]/50 p-6 rounded-lg border border-gray-800/30 shadow-md hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="mr-3 text-blue-400 text-xl">🧱</div>
              <h3 className="text-xl font-semibold text-slate-300">Websites That Work</h3>
            </div>
            <div className="pl-8 space-y-4">
              <p className="text-slate-400 leading-relaxed">
                Mobile-first websites that prioritize performance, usability, and maintainability. No unnecessary code or bloat.
              </p>
              <ul className="space-y-2 text-slate-400 pl-6">
                <li className="list-disc">
                  <span>Responsive designs built on modern frameworks like Next.js</span>
                </li>
                <li className="list-disc">
                  <span>Ongoing maintenance and content updates handled for you</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#0e1117]/50 p-6 rounded-lg border border-gray-800/30 shadow-sm hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="mr-3 text-blue-400 text-xl">🧠</div>
              <h3 className="text-xl font-semibold text-slate-300">Technical Consulting & Strategy</h3>
            </div>
            <div className="pl-8">
              <p className="text-slate-400 leading-relaxed">
                Strategic guidance for small businesses facing technical challenges. I help you plan migrations, audit your tech stack, and choose sustainable solutions that fit your real-world constraints.
              </p>
            </div>
          </div>
          
          <div className="bg-[#1c2330]/50 p-6 rounded-lg border border-gray-800/30 shadow-md hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="mr-3 text-blue-400 text-xl">🔧</div>
              <h3 className="text-xl font-semibold text-slate-300">IT Support for Local Businesses</h3>
            </div>
            <div className="pl-8">
              <p className="text-slate-400 leading-relaxed">
                Through VibeLight Media, providing reliable hardware/software maintenance, troubleshooting, and user support for small businesses in the local area.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Personal Approach */}
      <Section 
        id="approach"
        title="How I Work"
        label="// philosophy"
        className="mb-20"
        withContainer={false}
      >
        <div className="bg-[#0e1117]/50 p-8 rounded-lg border border-gray-800/30 shadow-sm space-y-8" style={getAnimationStyle('approach')}>
          <div className="flex items-start gap-4">
            <span className="text-blue-400 font-bold text-lg">01</span>
            <div>
              <h4 className="text-lg text-slate-200 font-semibold mb-1">Diagnose First, Then Build</h4>
              <p className="text-slate-400 leading-relaxed">
                I take a direct approach, focusing on fixing problems at the root cause rather than applying superficial fixes. This means building systems that are reliable and maintainable.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-blue-400 font-bold text-lg">02</span>
            <div>
              <h4 className="text-lg text-slate-200 font-semibold mb-1">Build for Independence</h4>
              <p className="text-slate-400 leading-relaxed">
                When I build something, I build it to last and document it clearly. The goal is empowerment—to give you a system you can own and understand, not one that creates dependency.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <span className="text-blue-400 font-bold text-lg">03</span>
            <div>
              <h4 className="text-lg text-slate-200 font-semibold mb-1">Communicate Clearly</h4>
              <p className="text-slate-400 leading-relaxed">
                I don't use technical jargon to hide behind complexity. I explain concepts in plain language and keep you informed about what I'm doing and why it matters.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
} 