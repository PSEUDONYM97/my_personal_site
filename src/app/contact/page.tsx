import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/ui/Section";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Jared Williams",
  description: "Get in touch with Jared Williams. I'm open to questions, project ideas, or just connecting.",
};

export default function ContactPage() {
  const sideNavItems = [
    { id: "details", label: "Contact Details" },
    { id: "contact-form", label: "Send Message" },
  ];

  return (
    <PageLayout 
      title="Get In Touch" 
      subtitle="I'm open to inquiries about systems architecture, AI-driven automation, and other complex challenges. Send a message, and I'll get back to you."
      sideNavItems={sideNavItems}
    >
      {/* Contact Details and Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {/* Contact Information */}
        <Section 
          id="details"
          label="// contact details" 
          title="How to Reach Me"
          className="!mb-0"
        >
          <p className="text-slate-300 mb-6">
            I prefer email for initial contact—it helps me keep track of conversations.
          </p>
          
          <div className="space-y-6">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/30">
              <h3 className="text-lg font-semibold mb-2 text-slate-300">📧 Email (Preferred)</h3>
              <a 
                href="mailto:jwill797@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition text-lg"
              >
                jwill797@gmail.com
              </a>
              <p className="text-sm text-slate-400 mt-1">I'll get back to you as soon as I can.</p>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/30">
              <h3 className="text-lg font-semibold mb-2 text-slate-300">📞 Phone</h3>
              <a 
                href="tel:2177999800" 
                className="text-blue-400 hover:text-blue-300 transition text-lg"
              >
                (217) 799-9800
              </a>
              <p className="text-sm text-slate-400 mt-1">Please leave a message if I don't answer.</p>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/30">
              <h3 className="text-lg font-semibold mb-2 text-slate-300">📍 Location</h3>
              <p className="text-slate-300">Tilton, Illinois</p>
              <p className="text-sm text-slate-400 mt-1">Working remotely</p>
            </div>
          </div>
        </Section>
        
        {/* Contact Form */}
        <Section
          id="contact-form"
          label="// send message"
          title="Send a Message"
          className="!mb-0" 
        >
          <p className="text-slate-300 mb-8">
            Let me know what you're working on. The more context you provide, the better I can help.
          </p>
          <ContactForm />
        </Section>
      </div>
    </PageLayout>
  );
} 