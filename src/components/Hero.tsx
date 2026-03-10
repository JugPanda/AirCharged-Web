import Link from 'next/link';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              A Smarter Way To Win In{' '}
              <span className="gradient-text">Rocket League</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              A high-percentage Rocket League system built on fundamentals.
              Learn how to win more games by playing smarter, not faster.
            </p>
            
            <p className="text-gray-400">
              Used by players from Gold to Grand Champion.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/ground-system"
                className="group flex items-center gap-3 gradient-bg px-6 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Start With The First 3 Pages Free
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Content - Book Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Book container */}
              <div className="relative w-72 md:w-80 transform hover:rotate-2 transition-transform duration-500">
                <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 p-6 shadow-2xl shadow-purple-500/20 border border-purple-400/20">
                  <div className="h-full flex flex-col justify-between text-white">
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-70">The Ultimate</p>
                      <h3 className="text-2xl font-bold mt-1">2v2 Guide</h3>
                    </div>
                    <div>
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <FaBookOpen className="text-2xl" />
                      </div>
                      <p className="text-sm opacity-70">The Pacifist System®</p>
                      <p className="font-semibold">AirCharged</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg bg-purple-800/30 -z-10" />
                <div className="absolute -bottom-8 -right-8 w-full h-full rounded-lg bg-purple-900/20 -z-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
