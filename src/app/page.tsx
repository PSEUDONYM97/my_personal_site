import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Section, { SectionGrid, Card, TextBlock, CTABox } from "@/components/ui/Section";

export const metadata = {
  title: "Jared Williams | I build systems that actually work",
  description: "AI-driven systems architect from Tilton, Illinois. I design tools that make chaos manageable, automate repetitive tasks, and help people think more clearly.",
  openGraph: {
    title: "Jared Williams | I build systems that actually work",
    description: "AI-driven systems architect from Tilton, Illinois. I design tools that make chaos manageable, automate repetitive tasks, and help people think more clearly.",
    url: "https://jaredwilliams.dev",
    siteName: "Jared Williams",
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  const sideNavItems = [
    { id: "intro", label: "Intro" },
    { id: "path", label: "My Path" },
    { id: "help", label: "How I Help" },
    { id: "building", label: "Building Now" },
    { id: "beyond", label: "Beyond Code" },
    { id: "values", label: "Core Values" },
    { id: "contact", label: "Contact" },
  ];
  
  return (
    <PageLayout sideNavItems={sideNavItems}>
      {/* Hero Section */}
      <section id="intro" className="pt-12 pb-16 md:pt-20 md:pb-32 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            I build systems that actually work.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-4 md:mb-6 max-w-3xl mx-auto">
            I'm Jared—an AI-driven systems architect working out of Tilton, Illinois.
          </p>
          
          <p className="text-base md:text-lg text-slate-400 mb-4 md:mb-6 max-w-3xl mx-auto">
            I design tools that make chaos manageable, automate the boring stuff, and help real people think clearly.
          </p>

          <p className="text-base md:text-lg text-slate-400 mb-6 md:mb-8 max-w-3xl mx-auto">
            From clinics with broken HL7 data flows to small businesses buried in bad tech, I fix what others can't or won't.
          </p>

          {/* Key Points */}
          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50 mb-8 max-w-3xl mx-auto">
            <div className="text-left space-y-2">
              <p className="text-slate-300">• AI isn't magic—it's a core part of my thinking process.</p>
              <p className="text-slate-300">• I build for people who depend on their tools to work.</p>
              <p className="text-slate-300">• If you value clarity over trends, we'll get along.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link 
              href="/about" 
              className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-medium rounded-md button-hover shadow-md shadow-blue-500/20"
            >
              Learn My Approach
            </Link>
            
            <Link 
              href="/contact" 
              className="px-6 md:px-8 py-3 md:py-4 bg-gray-800 text-white font-medium rounded-md button-hover shadow-md shadow-black/30"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* My Path Section */}
      <Section 
        id="path" 
        label="// honest trajectory" 
        title="My Path Wasn't Linear—It Was Practical"
        withContainer={false}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/60 p-8 rounded-lg border border-slate-700/50 shadow-lg">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                I didn't come up through Big Tech or a traditional CS degree.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                I learned by solving real problems—from writing batch scripts in a sign shop to architecting HL7 integrations for hospitals processing millions of messages a day.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                I've built every skill the same way: <strong className="text-slate-300">one constraint, one challenge, one tool at a time.</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* How I Help Section */}
      <Section
        id="help"
        label="// systems that last"
        title="Core Expertise"
        withContainer={false}
        className="relative"
      >
        <TextBlock highlight className="text-xl mb-12 text-center max-w-2xl mx-auto">
          I don't just build websites or workflows. I design resilient systems that behave well under pressure.
        </TextBlock>
        
        <SectionGrid columns={2}>
          <Card 
            title="Healthcare Systems Integration"
            className="bg-[#1c2330] p-8 card-hover"
            link="/projects"
          >
            <TextBlock className="mb-6 text-lg">
              HL7 pipelines, Epic workflows, and secure automations. Built for hospitals, but maintainable by humans.
            </TextBlock>
            <div className="inline-flex items-center text-lg group-hover:translate-x-1 text-blue-400 hover:text-blue-300 transition">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Card>
          
          <Card 
            title="AI-Driven Development" 
            className="bg-[#1c2330] p-8 card-hover"
            link="/projects"
          >
            <TextBlock className="mb-6 text-lg">
              AI-backed web development and system logic. Built faster, but never shallow.
            </TextBlock>
            <div className="inline-flex items-center text-lg group-hover:translate-x-1 text-blue-400 hover:text-blue-300 transition">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Card>
          
          <Card 
            title="Small Business Systems Architecture" 
            className="bg-[#1c2330] p-8 card-hover"
            link="/projects"
          >
            <TextBlock className="mb-6 text-lg">
              Enterprise-grade logic applied to the scale of local and family-run businesses.
            </TextBlock>
            <div className="inline-flex items-center text-lg group-hover:translate-x-1 text-blue-400 hover:text-blue-300 transition">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Card>
          
          <Card 
            title="Process Automation & Workflow Design" 
            className="bg-[#1c2330] p-8 card-hover"
            link="/projects"
          >
            <TextBlock className="mb-6 text-lg">
              Tools that reduce friction and cognitive load—without trapping you in a vendor's ecosystem.
            </TextBlock>
            <div className="inline-flex items-center text-lg group-hover:translate-x-1 text-blue-400 hover:text-blue-300 transition">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Card>
        </SectionGrid>
      </Section>

      {/* What I'm Building Now Section */}
      <Section
        id="building"
        label="// live experiments"
        title="What I'm Building Now"
        withContainer={false}
      >
        <TextBlock highlight className="text-xl mb-12 text-center max-w-2xl mx-auto">
          These are active, personal projects—live experiments I use, test, and refine myself.
        </TextBlock>
        
        <SectionGrid>
          <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40">
            <h3 className="text-2xl font-semibold mb-4 text-slate-300">Personal Website v2</h3>
            <TextBlock>
              A strategic rebuild of this site to serve as a public testbed for AI workflows and personal tooling.
            </TextBlock>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40">
            <h3 className="text-2xl font-semibold mb-4 text-slate-300">AI Task Management System</h3>
            <TextBlock>
              A self-hosted AI system that routes tasks, stores context, and parses natural language via GPT and n8n.
            </TextBlock>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40">
            <h3 className="text-2xl font-semibold mb-4 text-slate-300">Cognitive Mirror AI</h3>
            <TextBlock>
             A personal AI assistant indexed on my own values and decision frameworks to provide reflective feedback.
            </TextBlock>
          </Card>
        </SectionGrid>
      </Section>

      {/* Beyond Code Section */}
      <Section
        id="beyond"
        label="// home lab mentality"
        title="Beyond Code"
        withContainer={false}
      >
        <div className="max-w-4xl mx-auto">
          <TextBlock highlight className="text-xl mb-12 text-center">
            My home is a lab. My hobbies aren't distractions—they're extensions of how I approach problems.
          </TextBlock>
          
          <SectionGrid columns={2}>
            <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40">
              <h3 className="text-2xl font-semibold mb-4 text-slate-300">Workshop & Making</h3>
              <TextBlock>
                I learn as much from woodworking and 3D printing as I do from dev tools. The principles are the same.
              </TextBlock>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40">
              <h3 className="text-2xl font-semibold mb-4 text-slate-300">Restoration Projects</h3>
              <TextBlock>
                I'm rebuilding my grandfather's trike—not just as a machine, but as a systems exercise in legacy hardware.
              </TextBlock>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40">
              <h3 className="text-2xl font-semibold mb-4 text-slate-300">Coffee & Iteration</h3>
              <TextBlock>
                AI-assisted flavor logs, brewing ratios, and systems for getting every variable just right.
              </TextBlock>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40">
              <h3 className="text-2xl font-semibold mb-4 text-slate-300">Self-Hosted Home Lab</h3>
              <TextBlock>
                Experimental software and rebuilt infrastructure for media, backups, and testing. One problem at a time.
              </TextBlock>
            </Card>
          </SectionGrid>
        </div>
      </Section>
      
      {/* Core Values Section */}
      <Section 
        id="values" 
        label="// what drives me" 
        title="Core Values"
        withContainer={false}
      >
        <SectionGrid>
          <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40">
            <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-300">Applied Mastery</h3>
            <TextBlock>
              I learn by solving real-world problems—not by watching tutorials or chasing abstract theory.
            </TextBlock>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40">
            <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-300">High-Fidelity Work</h3>
            <TextBlock>
              I don't scale fast; I build deep. My best work isn't mass-produced, it's carefully architected.
            </TextBlock>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/40">
            <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-300">Grounded Impact</h3>
            <TextBlock>
              My tools are built for the people who actually use them—not just for platforms or dashboards.
            </TextBlock>
          </Card>
        </SectionGrid>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        label="// let's talk"
        title="Ready to Build Something Real?"
        withContainer={false}
      >
        <div className="max-w-4xl mx-auto text-center">
          <TextBlock highlight className="text-xl mb-8">
            My work is built on clarity, autonomy, and a commitment to meaningful results. If that resonates, let's talk.
          </TextBlock>
          
          <TextBlock className="text-lg mb-8">
            Let's start with a real conversation—no pressure, no sales pitch.
          </TextBlock>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link 
              href="/contact" 
              className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-medium rounded-md button-hover shadow-md shadow-blue-500/20"
            >
              Start a Conversation
            </Link>
            
            <Link 
              href="/about" 
              className="px-6 md:px-8 py-3 md:py-4 bg-gray-800 text-white font-medium rounded-md button-hover shadow-md shadow-black/30"
            >
              Learn My Approach
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
