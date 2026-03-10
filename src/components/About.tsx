import { FaTrophy, FaUsers, FaChartLine, FaDice } from 'react-icons/fa';

const highlights = [
  {
    icon: FaTrophy,
    title: 'Competitive Seasons',
    description: 'Regular seasons with playoffs and championship matches',
  },
  {
    icon: FaDice,
    title: '6mans Pickup Games',
    description: 'Queue up anytime for ranked pickup games outside of league play',
  },
  {
    icon: FaUsers,
    title: 'Active Community',
    description: 'Connect with players who share your competitive drive',
  },
  {
    icon: FaChartLine,
    title: 'Skill Growth',
    description: 'Improve by competing against skilled opponents',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          What is <span className="gradient-text">ERA</span>?
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              The <span className="text-[#e63946] font-semibold">Elite Rocket Association (ERA)</span> is 
              a competitive Rocket League league designed for players who are serious about improving 
              and competing at the highest level.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you&apos;re a seasoned Grand Champion or an aspiring competitor looking to make 
              your mark, ERA provides the platform, structure, and community you need to elevate your game.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Join a community of dedicated players, compete in organized matches, and prove you 
              have what it takes to be elite.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 rounded-xl bg-[#111] border border-white/10 hover:border-[#e63946] hover:translate-x-2 transition-all cursor-default"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#e63946] to-[#c1121f]">
                  <item.icon className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
