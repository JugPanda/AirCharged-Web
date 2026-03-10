import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    quote: "After years of bouncing around the ranks, the Pacifist System completely reset how I approached the game. By focusing on fundamentals and reading the play better, I shot up to Champion III despite not being a mechanical player.",
    rank: 'C1 – C3',
    name: 'McHiggo',
  },
  {
    quote: "I had already received coaching from top coaches but something was still missing in my gameplay. After following the Pacifist System and joining the cohort, I finally reached Grand Champion II for the first time.",
    rank: 'GC1 – GC2',
    name: 'JugPanda',
  },
  {
    quote: "I started the course as Gold II with around 450 hours. By focusing on better decisions and fundamentals instead of mechanics, I finished the program in Diamond and later peaked at Champion I.",
    rank: 'G2 – C1',
    name: 'LaffinJoker',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Results From <span className="gradient-text">Pacifist System</span> Players
          </h2>
          <p className="text-gray-400">
            Real feedback from players who have used the system and coaching program.
          </p>
        </div>

        <p className="text-center text-gray-400 mb-8">
          Players across every rank are improving with the Pacifist System.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#111] border border-white/10 hover:border-purple-500/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-400 font-semibold">{testimonial.rank}</p>
                  <p className="text-gray-500 text-sm">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
