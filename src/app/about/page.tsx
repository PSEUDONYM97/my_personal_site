import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About | Jared Williams',
  description: 'Learn about Jared Williams - building websites, systems & solutions for businesses and nonprofits.',
  openGraph: {
    title: 'About | Jared Williams',
    description: 'Learn about Jared Williams - building websites, systems & solutions for businesses and nonprofits.'
  }
};

export default function AboutPage() {
  return <AboutContent />;
} 