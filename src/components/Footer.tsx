import Link from "next/link";

type FooterProps = {
  showContactButton?: boolean;
};

export default function Footer({ showContactButton = false }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 max-w-7xl mx-auto">
      {showContactButton && (
        <div className="text-center mb-8">
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition"
          >
            Get in touch
          </Link>
        </div>
      )}
      
      <div className="text-sm text-gray-500 text-center">
        &copy; {currentYear} Jared Williams • All rights reserved
      </div>
    </footer>
  );
} 