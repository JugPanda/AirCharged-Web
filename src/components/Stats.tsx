import { FaUsers, FaClock, FaTrophy } from 'react-icons/fa';

const stats = [
  { icon: FaUsers, value: '3000+', label: 'Community Members' },
  { icon: FaClock, value: '1500+', label: 'Hours of Coaching' },
  { icon: FaTrophy, value: '25+', label: 'Seasons Grand Champion' },
];

export default function Stats() {
  return (
    <section className="py-12 bg-[#050505] border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-gray-400 mb-8">
          A system built on years of coaching experience
        </p>
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="text-2xl text-purple-400 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
