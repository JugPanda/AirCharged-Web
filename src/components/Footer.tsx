import Link from 'next/link';
import { FaDiscord, FaYoutube, FaPatreon, FaAmazon } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center font-bold text-xl">
                A
              </div>
              <span className="font-bold text-xl">AirCharged</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              The Pacifist System® is a structured Rocket League methodology and strategic framework. 
              Fundamentals first.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <FaDiscord className="text-xl text-[#5865F2]" />
              </a>
              <a href="https://youtube.com/@AirCharged" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <FaYoutube className="text-xl text-red-500" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <FaPatreon className="text-xl text-[#f96854]" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                <FaAmazon className="text-xl text-[#ff9900]" />
              </a>
            </div>
          </div>

          {/* Free Path */}
          <div>
            <h4 className="font-bold mb-4 text-purple-400">Free Path</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/ground-system" className="hover:text-white transition-colors">Ground System</Link></li>
              <li><Link href="/defensive-system" className="hover:text-white transition-colors">Defensive System</Link></li>
              <li><Link href="/aerial-system" className="hover:text-white transition-colors">Aerial System</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-purple-400">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">The Book</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coaching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2026 The Pacifist System® - fundamentals first.</p>
          <p className="mt-2 text-xs">
            The Pacifist System® is a structured Rocket League methodology created by AirCharged.
          </p>
        </div>
      </div>
    </footer>
  );
}
