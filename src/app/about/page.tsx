import Link from 'next/link';
import { FaBook, FaUsers, FaChalkboardTeacher, FaArrowRight, FaCheck } from 'react-icons/fa';

const forYou = [
  'Feel fast but inconsistent',
  'Understand mechanics but lack control',
  'Want clearer decision-making in ranked play',
  'Prefer consistency over peaks',
];

const howTaught = [
  { icon: FaBook, text: 'A free fundamentals path (offence, defence, and aerial control)' },
  { icon: FaBook, text: 'A structured physical book outlining the full framework' },
  { icon: FaChalkboardTeacher, text: 'Practical blueprints that translate theory into repeatable habits' },
  { icon: FaUsers, text: 'Optional coaching and replay support through the community' },
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">The Pacifist System®</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A high-percentage Rocket League improvement framework focused on control, 
            positioning, and decision making rather than speed, mechanics, or highlight plays.
          </p>
        </div>

        {/* Core Philosophy */}
        <div className="glass rounded-2xl p-8 mb-12">
          <p className="text-xl text-gray-300 leading-relaxed">
            It&apos;s built around a simple idea:
          </p>
          <p className="text-2xl font-semibold text-white mt-4">
            Rocket League is a game of probabilities, and every touch either increases or 
            decreases your chances of winning the next interaction.
          </p>
        </div>

        {/* Why It Exists */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Why It Exists</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Most Rocket League advice prioritises speed, mechanics, and flashy plays.
            While those skills have their place, they often leave players inconsistent, 
            overwhelmed, and unsure why they win one game and lose the next.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">The Pacifist System® was created to solve that problem.</strong>
          </p>
          <p className="text-gray-400">
            Instead of teaching players to outplay opponents at full speed, it focuses on:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-3 text-gray-300">
              <FaCheck className="text-purple-500" /> Controlling space
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <FaCheck className="text-purple-500" /> Applying pressure without overcommitting
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <FaCheck className="text-purple-500" /> Forcing mistakes through positioning and restraint
            </li>
          </ul>
        </div>

        {/* How It's Taught */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">How The System Is Taught</h2>
          <p className="text-gray-400 mb-6">The Pacifist System® is taught through:</p>
          <div className="space-y-4">
            {howTaught.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5">
                <div className="p-2 rounded-lg gradient-bg flex-shrink-0">
                  <item.icon className="text-sm" />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who It's For */}
        <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Who It&apos;s For</h2>
          <p className="text-gray-400 mb-6">The Pacifist System® is for players who:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {forYou.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            It&apos;s not designed for players chasing flashy clips or mechanical shortcuts.
          </p>
        </div>

        {/* About The Coach */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">About The Coach</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The system was developed by <strong className="text-white">AirCharged</strong>, a Rocket League coach 
            with over <strong className="text-white">1,500 hours of coaching experience</strong> and more than 
            <strong className="text-white"> 20 seasons at Grand Champion level</strong>.
          </p>
          <p className="text-xl font-semibold text-purple-400 mt-6">
            The focus has always been the same: helping players win more by playing smarter, not faster.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/ground-system"
            className="inline-flex items-center gap-3 gradient-bg px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Start The Free Path
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
