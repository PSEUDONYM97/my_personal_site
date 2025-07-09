'use client';

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Script from 'next/script';

// EmailJS configuration
const SERVICE_ID = 'service_s8v48jg';
const TEMPLATE_ID = 'template_5x835gr'; // Consider creating a new, simpler template in EmailJS
const PUBLIC_KEY = 'yhYcM0zehTgn4SYTU';

// Rate limiting configuration
const SUBMISSION_LIMIT = 3; // Maximum submissions allowed
const SUBMISSION_TIMEOUT = 3600000; // Time window in ms (1 hour)

// reCAPTCHA Enterprise configuration
const RECAPTCHA_SITE_KEY = '6LcIUBErAAAAAIi_Umlv0iOZyk1I8Hj1caGOUI6W'; 
const RECAPTCHA_ACTION = 'contact_form_submit';

// Declare global window interface for reCAPTCHA Enterprise
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      }
    };
    onReCAPTCHALoad: () => void;
  }
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    companyWebsite: '' // Honeypot field - should remain empty
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error' | 'limit'>(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  
  // Rate limiting and reCAPTCHA setup
  useEffect(() => {
    // Set up reCAPTCHA callback
    window.onReCAPTCHALoad = () => {
      setRecaptchaLoaded(true);
    };
    
    // Check local storage for submission count
    const submissionData = localStorage.getItem('contactFormSubmissions');
    if (submissionData) {
      try {
        const { count, timestamp } = JSON.parse(submissionData);
        const now = Date.now();
        if (now - timestamp > SUBMISSION_TIMEOUT) {
          localStorage.setItem('contactFormSubmissions', JSON.stringify({ count: 0, timestamp: now }));
        }
      } catch (e) {
        localStorage.setItem('contactFormSubmissions', JSON.stringify({ count: 0, timestamp: Date.now() }));
      }
    } else {
      localStorage.setItem('contactFormSubmissions', JSON.stringify({ count: 0, timestamp: Date.now() }));
    }
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const checkRateLimit = (): boolean => {
    const submissionData = localStorage.getItem('contactFormSubmissions');
    if (!submissionData) return true;
    
    try {
      const { count, timestamp } = JSON.parse(submissionData);
      const now = Date.now();
      
      if (now - timestamp < SUBMISSION_TIMEOUT && count >= SUBMISSION_LIMIT) {
        return false;
      }
      
      localStorage.setItem('contactFormSubmissions', JSON.stringify({ count: (now - timestamp < SUBMISSION_TIMEOUT ? count : 0) + 1, timestamp: now }));
      return true;
    } catch (e) {
      return true; // Allow on error
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (formData.companyWebsite) {
      console.log('Honeypot triggered - bot detected');
      setTimeout(() => { setSubmitStatus('success'); setIsSubmitting(false); }, 1000);
      return;
    }
    
    if (!checkRateLimit()) {
      setSubmitStatus('limit');
      setIsSubmitting(false);
      return;
    }
    
    let recaptchaToken = '';
    try {
      if (recaptchaLoaded && window.grecaptcha && window.grecaptcha.enterprise) {
        recaptchaToken = await window.grecaptcha.enterprise.execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION });
      }
    } catch (error) {
      console.error('reCAPTCHA error:', error);
    }
    
    if (formRef.current) {
      try {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          {
            publicKey: PUBLIC_KEY,
            // You may need to update your EmailJS template to not require the old fields
          }
        );
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', companyWebsite: '' });
      } catch (error) {
        console.error('Email error:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}&onload=onReCAPTCHALoad`}
        strategy="afterInteractive"
      />
      
      {submitStatus === 'success' ? (
        <div className="bg-green-900/30 border border-green-800 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2 text-green-400">Message Sent!</h3>
          <p className="text-slate-300 mb-4">Thanks for reaching out. I'll get back to you soon.</p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-600 transition"
          >
            Send Another
          </button>
        </div>
      ) : submitStatus === 'limit' ? (
        <div className="bg-amber-900/30 border border-amber-800 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2 text-amber-400">Too Many Messages</h3>
          <p className="text-slate-300 mb-4">You've sent several messages recently. Please try again in about an hour.</p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-600 transition"
          >
            Back to Form
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                Name <span className="text-blue-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0e1117] border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 text-white transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                Email <span className="text-blue-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0e1117] border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 text-white transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Honeypot field - hidden from humans but visible to bots */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="companyWebsite">Website (leave empty)</label>
            <input
              type="text"
              id="companyWebsite"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-slate-300 mb-2 font-medium">
              Subject <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0e1117] border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 text-white transition-colors"
              placeholder="e.g., Question about a project"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
              Message <span className="text-blue-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-[#0e1117] border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 text-white resize-none transition-colors"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          
          {submitStatus === 'error' && (
            <div className="bg-red-900/30 border border-red-800 p-4 rounded-md">
              <p className="text-red-400">There was an error sending your message. Please try again or contact me directly via email.</p>
            </div>
          )}
          
          <div className="text-right">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition transform hover:scale-105 shadow-md shadow-blue-500/20 border border-blue-500/30 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          
          <div className="text-xs text-gray-500 text-center mt-4">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> and
            <a href="https://policies.google.com/terms" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer"> Terms of Service</a> apply.
          </div>
        </form>
      )}
    </div>
  );
} 