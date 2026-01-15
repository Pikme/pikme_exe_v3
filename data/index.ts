import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

export interface ItineraryItem {
  day: string;
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Tour {
  slug: string;
  title: string;
  location: string;
  price: string;
  duration: string;
  overview: string;
  highlights: string[];
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  importantInfo: string[];
  faqs: FAQItem[];
  quickHighlights: {
    duration: string;
    hotel: string;
    meals: string;
    transport: string;
    groupType: string;
  };
  // Hierarchical metadata
  country: string;
  state: string;
  attraction: string;
}

const TOURS_DIR = path.join(process.cwd(), 'data/tours');

export async function getTourBySlug(slug: string): Promise<Tour | null> {
  try {
    // Search for the slug in the hierarchical structure
    const files = await glob(`${TOURS_DIR}/**/${slug}.json`);
    if (files.length === 0) return null;
    
    const fileContent = fs.readFileSync(files[0], 'utf8');
    return JSON.parse(fileContent) as Tour;
  } catch (error) {
    console.error(`Error fetching tour ${slug}:`, error);
    return null;
  }
}

export async function getAllTours(): Promise<Tour[]> {
  try {
    const files = await glob(`${TOURS_DIR}/**/*.json`);
    const tours = files.map(file => {
      const content = fs.readFileSync(file, 'utf8');
      return JSON.parse(content) as Tour;
    });
    return tours;
  } catch (error) {
    console.error('Error fetching all tours:', error);
    return [];
  }
}

export async function getAllTourSlugs(): Promise<string[]> {
  try {
    const files = await glob(`${TOURS_DIR}/**/*.json`);
    return files.map(file => path.basename(file, '.json'));
  } catch (error) {
    console.error('Error fetching tour slugs:', error);
    return [];
  }
}
