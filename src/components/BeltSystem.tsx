import Link from 'next/link';
import { FaCar, FaShieldAlt, FaRocket, FaArrowRight } from 'react-icons/fa';

const systems = [
  {
    icon: FaCar,
    title: 'Ground System',
    subtitle: 'Lateral dribble foundations.',
    skills: ['Hook shots', 'Bounce dribbles', 'Carry plays', '50s'],
    href: '/ground-system',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: FaShieldAlt,
    title: 'Defence System',
    subtitle: 'Defence foundations.',
    skills: ['Shadowing', 'Face-out', 'Challenging', 'Kickoffs', '50/50 control'],
    href: '/defensive-system',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: FaRocket,
    title: 'Air System',
    subtitle: 'Aerial foundations.',
    skills: ['Fast aerials', 'Air control', 'Wall shots', 'Double touches', 'Ceiling plays'],
    href: '/aerial-system',
    color: 'from-purple-500 to-purple-700',
  },
];

export default function BeltSystem() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Free Development Path <span className="gradient-text">(Belt System)</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Three systems. Clear progression. Earn belts by proving specific skills, with videos, 
            training packs, and trackers. E-certificate on full completion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {systems.map((system, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-[#111] border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all hover:-translate-y-2"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${system.color}`} />
              
              <div className="p-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${system.color} flex items-center justify-center mb-6`}>
                  <system.icon className="text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{system.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{system.subtitle}</p>
                
                <ul className="space-y-2 mb-6">
                  {system.skills.map((skill, i) => (
                    <li key={i} className="text-gray-500 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-purple-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={system.href}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Explore {system.title.split(' ')[0]} System
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pink Belt CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/ground-system"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/25"
          >
            Start With The Pink Belt (Hook Shot)
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
