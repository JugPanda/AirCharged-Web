import { FaCheck } from 'react-icons/fa';

const reasons = [
  'You feel stuck despite grinding mechanics',
  'You want to win more games without playing faster',
  'You prefer structure over guesswork',
  'You want a repeatable way to improve in 2v2',
];

export default function ForYou() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          This system is <span className="gradient-text">for you</span> if:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-[#111] border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <div className="p-2 rounded-lg gradient-bg flex-shrink-0">
                <FaCheck className="text-sm" />
              </div>
              <p className="text-gray-300">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
