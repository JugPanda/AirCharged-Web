import Link from 'next/link';
import { FaDiscord, FaRocket, FaArrowLeft, FaCheck } from 'react-icons/fa';

const skills = [
  'Fast aerials',
  'Air control',
  'Wall shots',
  'Double touches',
  'Ceiling plays',
  'Boost efficiency',
];

export default function AerialSystemPage() {
  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-medium mb-4">Part of the Free Fundamentals System</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Aerial</span> System
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn reliable aerial mechanics that form the foundation for advanced systems like The Pacifist System®.
          </p>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
            <FaRocket className="text-4xl" />
          </div>
        </div>

        {/* Completing the Belt System */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Completing the Belt System</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Belt System is completed inside the Pacifist System Discord. Each belt includes guided drills, 
            progress tracking, and clear criteria for completion, allowing you to develop each skill correctly 
            before moving on.
          </p>
          <p className="text-gray-400">
            Once you&apos;re in the Discord, start with the <Link href="/ground-system" className="text-pink-400 hover:underline">Pink Belt</Link> and 
            follow the progression step by step.
          </p>
        </div>

        {/* What it teaches */}
        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">What The Aerial System Teaches</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Aerial System focuses on <strong className="text-white">controlled aerial movement, efficient take-offs, and accurate ball contact</strong>. 
            It teaches players how to approach the ball in the air with intention, maintaining balance, boost efficiency, 
            and recover cleanly after each play.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <FaCheck className="text-purple-500" />
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to apply */}
        <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Ready To Apply The Aerial System?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Completing the Aerial System gives you the foundations required to take controlled, intentional 
            touches in the air without sacrificing positioning or consistency.
          </p>
          <p className="text-gray-400 mb-6">
            To help players apply these skills in real matches, the 4-week <strong className="text-white">Flight Program</strong> provides 
            a structured training plan built entirely around the Aerial System belts.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1"
          >
            <FaDiscord className="text-xl" />
            Join Discord to Start
          </a>
          <Link
            href="/ground-system"
            className="flex items-center gap-3 border border-white/20 hover:border-purple-500/50 px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1"
          >
            <FaArrowLeft />
            Back to Ground System
          </Link>
        </div>
      </div>
    </div>
  );
}
