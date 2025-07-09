import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Resume | Jared Williams",
  description: "Professional experience, skills, and background of Jared Williams, an AI-driven systems integration engineer.",
};

// Data extracted and structured from the verified resume document
const resumeData = {
  summary: "AI-driven systems integration engineer with 5+ years in healthcare IT, specializing in HL7/Cloverleaf/Epic environments, internal tooling, and automation infrastructure. Architected SFTP frameworks, translation pipelines, and debugging tools for high-volume hospital systems processing 4–5 million messages per day. Simultaneously operates a personal AI R&D lab through VibeLight Media, building custom prompt engines, smart task routers, and content automation pipelines. Known for hands-on execution, rapid prototyping, and deep ownership—currently under consideration for promotion to Senior Systems Engineer at Saint Francis.",
  contact: {
    email: "jwill797@gmail.com",
    phone: "(217) 799-9800",
    location: "Tilton, IL",
    linkedin: "#", // Replace with actual LinkedIn URL
    github: "#",   // Replace with actual GitHub URL
  },
  skills: {
    "Languages & Scripting": ["Python", "PowerShell", "TCL", "JavaScript", "SQL", "C++", "C#", "Batch"],
    "Healthcare Standards & Protocols": ["HL7 v2.x (ADT, MDM, ORU, ORM)", "base64/PDF messages", "SFTP", "REST APIs", "JSON", "XML", "TCP/IP"],
    "Integration & Platforms": ["Epic Bridges", "Infor Cloverleaf", "Microsoft SQL Server", "Intune", "Red Hat Linux", "AIX"],
    "AI & Automation": ["n8n (self-hosted)", "OpenAI (GPT-4)", "Claude", "Gemini 1.5/2.5", "Custom AI agents", "Task routing AI", "Obsidian", "Cursor", "Telegram bots"],
  },
  certifications: [
    "Epic Bridges",
    "Cloverleaf Level 1 & 2",
    "Cloverleaf TCL",
  ],
  experience: [
    {
      role: "Systems Integration Engineer",
      company: "Saint Francis Health Systems",
      period: "Aug 2024 – Present",
      duties: [
        "Re-architected a legacy SFTP system into a centralized, config-driven Python framework, reducing onboarding time from 4 hours to under 30 minutes per site.",
        "Developed an RTF-to-text Python converter to transform Epic RTF payloads into usable plaintext for downstream systems.",
        "Authored a mass permission recovery script after an accidental chmod reset on over 1,000 files—demonstrated precise log capture and error recovery.",
        "Created internal CLI tools for system-to-system file tracing and thread search, improving triage speed and visibility across 25+ sites.",
        "Participated in infrastructure planning for Red Hat migration; contributed cost-optimization analysis and CLI testing decisions.",
      ],
    },
    {
      role: "Systems Integration Architect",
      company: "Carle Foundation Hospital",
      period: "Apr 2020 – Aug 2024",
      duties: [
        "Led HL7 interface lifecycle projects from kickoff through deployment, working across Epic Bridges and Cloverleaf for ADT, ORM, MDM, ORU, and base64-encoded PDF payloads.",
        "Wrote custom PowerShell utilities to handle one-off vendor data tasks, cutting effort by ~40%.",
        "Solely trained and onboarded successor during a six-month transition period.",
        "Acted as primary project lead on most builds unless new to the environment.",
      ],
    },
    {
      role: "Digital Support Technician – Digital Support Group",
      company: "Watchfire Signs",
      period: "Mar 2016 – Apr 2020",
      duties: [
        "Handled digital billboard support and platform automation with sub-4-hour resolution times.",
        "Built internal troubleshooting scripts and maintained media platform integrations.",
        "Provided phone and onsite support to field technicians and clients.",
      ],
    },
  ],
  independentWork: {
    title: "Independent AI Systems Architect",
    company: "VibeLight Media – Personal AI R&D Studio",
    period: "2023 – Present",
    note: "This work is self-initiated and conducted outside employment hours, serving as a practical AI innovation lab.",
    contributions: [
      "Developed GPT- and Claude-based automation workflows to process incoming task messages (e.g., “Remind me to call Rick”) into structured, prioritized task queues.",
      "Created weather-aware daily briefings combining OpenWeatherMap with LLM summarization to guide task planning.",
      "Authored `perfect_prompt_config.yaml`—a modular system prompt architecture with escalation logic, tone alignment, and input validation for reuse across multiple workflows.",
      "Engineered a Notion-integrated content ops system that takes a client brief and auto-generates wireframes, sitemaps, tone guides, and first-draft copy.",
      "Built a cognitive mirror assistant—a value-reflective AI designed to model and critique decisions using a personalized belief and strategy index.",
      "Converted HEIC images to web-safe formats using custom Python scripts for pipeline-ready automation.",
    ]
  },
  impact: {
    title: "System Scope & Impact",
    metrics: [
      "HL7 Message Volume: ~4–5 million messages/day",
      "Sites Supported: 25+ with 40+ threads per site",
      "Work Modes: Full production and staging/test ownership",
      "Promotion Path: Candidate for Senior Systems Engineer (Spring 2026)",
      "Mentorship: Sole trainer for successor at Carle; frequent internal tool onboarding",
    ]
  },
  education: {
    degree: "All coursework completed toward A.A.S. in Computer Programming",
    institution: "Danville Area Community College",
    note: "Degree pending final paperwork and payment"
  },
};

const Section: React.FC<{title: string, children: React.ReactNode, className?: string}> = ({ title, children, className }) => (
  <div className={`mb-12 ${className}`}>
    <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-zinc-800">{title}</h2>
    {children}
  </div>
);

const SkillCategory: React.FC<{title: string, skills: string[]}> = ({ title, skills }) => (
  <div>
    <h3 className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wider">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="text-xs bg-zinc-800 px-3 py-1 rounded-full">{skill}</span>
      ))}
    </div>
  </div>
);

export default function ResumePage() {
  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <Navigation />

      <header className="py-20 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Jared S. Williams</h1>
          <p className="text-lg text-gray-400 mb-8">
            AI-Driven Systems Integration Engineer
          </p>
          <div className="flex gap-4 mb-12">
            <a 
              href="/Jared-Williams-Resume.pdf" // Ensure this path is correct
              download
              className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition"
            >
              Download PDF
            </a>
            <Link 
              href="/contact" 
              className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </header>
      
      <main className="pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-zinc-900/50 p-6 rounded-lg mb-8 border border-zinc-800">
                <h2 className="text-xl font-semibold mb-4 text-white">Contact</h2>
                <div className="space-y-3 text-gray-400">
                  <p>
                    <a href={`mailto:${resumeData.contact.email}`} className="hover:text-white">{resumeData.contact.email}</a>
                  </p>
                  <p>{resumeData.contact.location}</p>
                  <p>
                    <a href={`tel:${resumeData.contact.phone.replace(/\D/g, '')}`} className="hover:text-white">{resumeData.contact.phone}</a>
                  </p>
                  <p>
                    <a href={resumeData.contact.linkedin} className="hover:text-white">LinkedIn</a>
                  </p>
                  <p>
                    <a href={resumeData.contact.github} className="hover:text-white">GitHub</a>
                  </p>
                </div>
              </div>
              
              <div className="bg-zinc-900/50 p-6 rounded-lg mb-8 border border-zinc-800">
                <h2 className="text-xl font-semibold mb-4 text-white">Technical Skills</h2>
                <div className="space-y-4">
                  {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <SkillCategory key={category} title={category} skills={skills} />
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-lg mb-8 border border-zinc-800">
                <h2 className="text-xl font-semibold mb-4 text-white">Certifications</h2>
                <div className="flex flex-wrap gap-2">
                  {resumeData.certifications.map(cert => (
                    <span key={cert} className="text-xs bg-zinc-800 px-3 py-1 rounded-full">{cert}</span>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                <h2 className="text-xl font-semibold mb-4 text-white">Education</h2>
                <div>
                  <h3 className="font-medium text-white">{resumeData.education.degree}</h3>
                  <p className="text-gray-400">{resumeData.education.institution}</p>
                  <p className="text-sm text-gray-500 italic mt-1">{resumeData.education.note}</p>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Section title="🧠 Professional Summary">
              <p className="text-gray-300 leading-relaxed">{resumeData.summary}</p>
            </Section>
            
            <Section title="💼 Professional Experience">
              <div className="space-y-8">
                {resumeData.experience.map(job => (
                  <div key={job.company}>
                    <div className="flex flex-wrap justify-between items-baseline mb-1">
                      <h3 className="text-xl font-medium text-white">{job.role}</h3>
                      <span className="text-gray-500 text-sm">{job.period}</span>
                    </div>
                    <p className="text-gray-400 mb-3 font-semibold">{job.company}</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 pl-2">
                      {job.duties.map(duty => <li key={duty}>{duty}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>
            
            <Section title={`🔬 ${resumeData.independentWork.title}`}>
               <div>
                  <div className="flex flex-wrap justify-between items-baseline mb-1">
                    <h3 className="text-xl font-medium text-white">{resumeData.independentWork.company}</h3>
                    <span className="text-gray-500 text-sm">{resumeData.independentWork.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 italic my-3">{resumeData.independentWork.note}</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 pl-2">
                    {resumeData.independentWork.contributions.map(item => <li key={item}>{item}</li>)}
                  </ul>
              </div>
            </Section>

            <Section title="📊 System Scope & Impact">
              <ul className="list-disc list-inside text-gray-400 space-y-2 pl-2">
                {resumeData.impact.metrics.map(metric => <li key={metric}>{metric}</li>)}
              </ul>
            </Section>
          </div>
        </div>
      </main>

      <Footer showContactButton={true} />
    </div>
  );
} 