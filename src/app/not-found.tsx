'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  // This effect attempts to recover from a bad URL with extensions like .txt
  useEffect(() => {
    const path = window.location.pathname;
    // If the path has a file extension, try to redirect to the clean version
    if (path.includes('.') && !path.endsWith('.html') && !path.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js)$/i)) {
      const cleanPath = path.split('.')[0];
      if (cleanPath) {
        console.log(`Redirecting from ${path} to ${cleanPath}`);
        router.push(cleanPath);
      }
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-4">404</h1>
          <img 
            src="/images/404.svg" 
            alt="Page not found" 
            className="w-64 h-64 mx-auto my-6"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.currentTarget.style.display = 'none';
            }}
          />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Oops, looks like the page is lost.
          </h2>
          <p className="text-slate-300 mb-8">
            This is not a fault, just an accident that was not intentional.
          </p>
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
            >
              Return Home
            </Link>
            <button 
              onClick={() => router.back()}
              className="block w-full px-6 py-3 bg-gray-800 text-slate-200 font-medium rounded-md hover:bg-gray-700 transition transform hover:scale-105 shadow-md"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 