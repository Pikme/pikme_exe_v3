import { notFound } from 'next/navigation';
import { getTourBySlug, getAllTourSlugs } from '@/data';
import Hero from '@/components/Hero';
import QuickHighlights from '@/components/QuickHighlights';
import Highlights from '@/components/Highlights';
import Itinerary from '@/components/Itinerary';
import InclusionsExclusions from '@/components/InclusionsExclusions';
import Policies from '@/components/Policies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllTourSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const tour = await getTourBySlug(params.slug);
  
  if (!tour) return { title: 'Tour Not Found' };

  return {
    title: `${tour.title} | Pikme Tours`,
    description: tour.overview.substring(0, 160),
    openGraph: {
      title: tour.title,
      description: tour.overview.substring(0, 160),
      type: 'website',
    },
  };
}

export default async function TourPage({ params }: PageProps) {
  const tour = await getTourBySlug(params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <Hero 
          title={tour.title} 
          location={tour.location} 
          price={tour.price} 
          duration={tour.duration} 
        />

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <QuickHighlights data={tour.quickHighlights} />

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About this tour</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {tour.overview}
              </p>
            </section>

            <Highlights highlights={tour.highlights} />
            <Itinerary itinerary={tour.itinerary} />
            <InclusionsExclusions 
              inclusions={tour.inclusions} 
              exclusions={tour.exclusions} 
            />
            <Policies importantInfo={tour.importantInfo} />
            <FAQ faqs={tour.faqs} />
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-8 bg-white border border-gray-200 p-6 rounded-2xl shadow-xl">
              <p className="text-gray-500 text-sm uppercase font-bold tracking-wider mb-1">Starting from</p>
              <p className="text-4xl font-bold text-gray-900 mb-6">{tour.price}</p>
              
              <div className="space-y-3 mb-8">
                {tour.inclusions.slice(0, 3).map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> {inc}
                  </div>
                ))}
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition-colors mb-3">
                Book This Tour
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
