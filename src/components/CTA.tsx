import Link from 'next/link';
import { FaArrowRight, FaDiscord } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to play <span className="gradient-text">smarter</span>?
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of players who have transformed their gameplay through fundamentals-first training.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/ground-system"
            className="group flex items-center gap-3 gradient-bg px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Start Free Path
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1"
          >
            <FaDiscord className="text-xl" />
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
}
