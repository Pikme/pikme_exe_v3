import Link from 'next/link';
import { getAllTours } from '@/data';

export default async function Home() {
  const tours = await getAllTours();
  
  // Group tours by state
  const toursByState = tours.reduce((acc, tour) => {
    if (!acc[tour.state]) acc[tour.state] = [];
    acc[tour.state].push(tour);
    return acc;
  }, {} as Record<string, typeof tours>);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Pikme Tours</h1>
          <p className="text-xl text-gray-600">Discover 200+ curated experiences across 20 Indian states.</p>
        </header>
        
        <div className="space-y-12">
          {Object.entries(toursByState).map(([state, stateTours]) => (
            <section key={state}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">{state}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stateTours.map((tour) => (
                  <Link 
                    key={tour.slug} 
                    href={`/activity/${tour.slug}`}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all group"
                  >
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{tour.attraction}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-orange-600">{tour.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-gray-500">{tour.duration}</span>
                      <span className="font-bold text-gray-900">{tour.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
