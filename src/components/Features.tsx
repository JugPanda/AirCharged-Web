import { FaGamepad, FaMedal, FaBroadcastTower, FaHandshake, FaComments, FaCalendarAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaGamepad,
    title: 'Organized Competition',
    description: 'Structured leagues with scheduled matches, standings, and playoffs. No more random matchmaking—compete with purpose.',
  },
  {
    icon: FaMedal,
    title: 'All Skill Levels',
    description: 'Divisions for every rank ensure you\'re always competing against players at your level while pushing to climb higher.',
  },
  {
    icon: FaBroadcastTower,
    title: 'Live Broadcasts',
    description: 'Featured matches streamed live on Twitch with commentary. Show off your skills to the community.',
  },
  {
    icon: FaHandshake,
    title: 'Team Building',
    description: 'Find teammates, form rosters, and build chemistry. Compete as a unit and grow together.',
  },
  {
    icon: FaComments,
    title: 'Great Community',
    description: 'A supportive environment where competition meets camaraderie. Improve together, respect always.',
  },
  {
    icon: FaCalendarAlt,
    title: '6mans & Events',
    description: 'Queue up for 6mans anytime outside of league play. Plus community game nights and special events.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Why Choose <span className="gradient-text">ERA</span>?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-[#111] border border-white/10 hover:border-[#e63946] transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(230,57,70,0.2)]"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e63946] to-[#c1121f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
