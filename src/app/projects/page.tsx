import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Jared Williams",
  description: "A portfolio of real-world systems, automation tools, and integration projects built by Jared Williams.",
};

// Data for projects, extracted from verified resume and info documents
const featuredProjects = [
  {
    category: "HEALTHCARE IT & AUTOMATION",
    title: "Centralized SFTP Management Framework",
    description: "Re-architected a sprawling, manual SFTP setup into a centralized, configuration-driven Python framework. This eliminated redundant scripts and reduced the onboarding time for new SFTP sites from over 4 hours to less than 30 minutes.",
    technologies: ["Python", "Framework Design", "SFTP", "Automation", "Healthcare IT"],
    outcomes: [
      "Reduced site onboarding time by over 85%",
      "Centralized configuration for easier maintenance",
      "Eliminated code duplication and manual setup errors",
      "Built for a high-volume hospital system (Saint Francis Health Systems)",
    ],
    link: "#" // Can link to a more detailed case study later
  },
  {
    category: "AI & WORKFLOW AUTOMATION",
    title: "AI-Powered Task & Content Systems",
    description: "Operating a personal AI R&D lab (VibeLight Media) to build practical automation tools. Key projects include a natural language task router using GPT/n8n and a Notion-integrated content operations system that auto-generates project assets from a client brief.",
    technologies: ["AI Agents", "n8n", "OpenAI API", "Claude API", "Prompt Engineering", "Notion"],
    outcomes: [
      "Natural language processing for task management via SMS/Telegram",
      "Automated generation of wireframes, sitemaps, and copy",
      "Developed a reusable, modular system prompt architecture (`perfect_prompt_config.yaml`)",
      "Built a 'cognitive mirror' AI for decision modeling",
    ],
    link: "#"
  },
  {
    category: "DATA PROCESSING & TOOLING",
    title: "Epic RTF to Plaintext Converter",
    description: "Developed a Python script to handle a specific data transformation challenge within a healthcare environment. The tool reliably converts Rich Text Format (RTF) payloads from Epic into clean, usable plaintext for consumption by downstream systems that cannot process RTF.",
    technologies: ["Python", "Data Conversion", "Epic Systems", "HL7", "RTF"],
    outcomes: [
      "Enabled interoperability with legacy systems",
      "Automated a previously manual data cleanup task",
      "Ensured data integrity during transformation",
      "Solved a persistent data-flow problem for clinical data",
    ],
    link: "#"
  },
];

const otherProjects = [
  {
    category: "SYSTEMS RECOVERY",
    title: "Mass Permission Recovery Script",
    description: "Authored a critical recovery script after an accidental, recursive `chmod` command reset permissions on over 1,000 production files. By parsing `ls -l` output captured just before the incident, the script successfully rebuilt and executed all the necessary `chmod` commands to restore original permissions.",
    technologies: ["Shell Scripting", "Log Parsing", "System Administration", "Error Recovery"],
  },
  {
    category: "INTERNAL TOOLING",
    title: "Cross-System File Tracer",
    description: "Created a suite of internal CLI tools to improve operational visibility and triage speed. These tools allow engineers to trace files and search for threads across more than 25 distinct sites, significantly reducing time spent on manual investigations.",
    technologies: ["CLI Tools", "Scripting", "System Integration", "Triage"],
  },
  {
    category: "LEGACY WORKFLOW AUTOMATION",
    title: "Custom PowerShell Utilities",
    description: "At Carle Foundation Hospital, wrote various custom PowerShell utilities to handle one-off data manipulation and automation tasks for specific vendor requirements. These small, targeted scripts cut the manual effort for those tasks by an estimated 40%.",
    technologies: ["PowerShell", "Automation", "Data Manipulation", "Vendor Integration"],
  },
   {
    category: "AI-DRIVEN PERSONAL SYSTEMS",
    title: "Cognitive Mirror Assistant",
    description: "Engineered a personal AI assistant designed to act as a 'cognitive mirror.' The AI is provided with a detailed index of my personal values, decision-making frameworks, and cognitive styles, allowing it to critique ideas and strategies from a perspective that is an accurate reflection of my own.",
    technologies: ["AI Agents", "Prompt Engineering", "Personal Knowledge Management", "Decision Science"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <Navigation />

      <header className="py-20 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Real-World Projects</h1>
          <p className="text-lg text-gray-400 mb-8">
            A collection of systems I've built to solve tangible problems. No lorem ipsum, no placeholder case studies—just verified work.
          </p>
        </div>
      </header>

      <main className="pb-20 px-4 max-w-7xl mx-auto">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-white border-b border-zinc-800 pb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-12">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 grid grid-cols-1 md:grid-cols-10 gap-8 hover:border-blue-500/50 transition-colors duration-300">
                <div className="md:col-span-3">
                  <div className="sticky top-24">
                    <div className="text-xs text-blue-400 mb-3 font-semibold tracking-wider">{project.category}</div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
                    <div className="text-xs text-gray-500 mb-2 font-semibold uppercase">Technologies Used</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs bg-zinc-800 px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-7">
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="text-xs text-gray-500 mb-2 font-semibold uppercase">Key Outcomes</div>
                  <ul className="list-none space-y-2 text-gray-400 text-sm">
                    {project.outcomes.map(outcome => (
                      <li key={outcome} className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-10 text-white border-b border-zinc-800 pb-4">Other Notable Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                <div className="text-xs text-blue-400 mb-2 font-semibold tracking-wider">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs bg-zinc-800 px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Have a similar challenge?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            If these projects resonate with the kind of problems you're facing, I'm always open to a conversation.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition"
          >
            Get In Touch
          </Link>
        </div>
      </footer>

      <Footer />
    </div>
  );
} 