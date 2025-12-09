import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'Screw Systems Tech - Professional Engineering Development & Consulting Services | Screw Systems',
  description = 'Screw Systems Tech (Screw Systems) is a leading engineering development and consulting company offering software development, engineering consultancy, system design, and technical consulting services.',
  keywords = 'screw systems, screw systems tech, screws system, screw systems engineering, screw systems development, screw systems consultancy, screw systems tech services, screw systems software, screw systems consulting, engineering development, software development, engineering consultancy, technical consulting, system design, engineering services, development company, consultancy services, Bangalore engineering, India engineering services',
  image = 'https://screwsystems.tech/logo.png',
  url = 'https://screwsystems.tech',
  type = 'website'
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    // Ensure image URL is absolute
    const imageUrl = image.startsWith('http') ? image : `https://screwsystems.tech${image}`;
    updateOGTag('og:image', imageUrl);
    updateOGTag('og:url', url);
    updateOGTag('og:type', type);

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    // Ensure image URL is absolute for Twitter
    updateTwitterTag('twitter:image', imageUrl);
    updateTwitterTag('twitter:url', url);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url, type]);

  return null;
}

