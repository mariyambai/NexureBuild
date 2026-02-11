import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Artisan Coffee Co.',
    type: 'Café',
    problem: 'Generic template site that did not reflect their craft',
    solution: 'Custom design showcasing their roasting process and story',
    outcome: '40% increase in online orders, stronger brand presence',
    color: '#8B7355',
  },
  {
    title: 'Haven Wellness',
    type: 'Service Business',
    problem: 'Outdated website losing trust with potential clients',
    solution: 'Modern, calming design with clear service information',
    outcome: 'Tripled consultation bookings in first month',
    color: '#7B9B8C',
  },
  {
    title: 'Forge Design Studio',
    type: 'Creative Studio',
    problem: 'No portfolio presence to showcase their work',
    solution: 'Minimalist portfolio site that lets work speak',
    outcome: 'Featured by design community, 5 new client inquiries',
    color: '#B8986A',
  },
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-[#F5F2EE]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#121212] mb-8 tracking-tight text-center">
            Recent work
          </h2>
          <p className="text-center text-[#121212]/60 text-lg mb-20 max-w-2xl mx-auto">
            Real businesses, real results. Each project built with the same care and attention to detail.
          </p>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <div className="md:flex">
                  <div
                    className="md:w-2/5 h-64 md:h-auto relative overflow-hidden"
                    style={{ backgroundColor: project.color }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ArrowUpRight className="w-12 h-12 text-white/30 transition-all duration-300 group-hover:text-white/60 group-hover:scale-110" />
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8 md:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-light text-[#121212] mb-2">
                          {project.title}
                        </h3>
                        <p className="text-[#C9A96E] font-medium">{project.type}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-[#121212]/50 mb-1 uppercase tracking-wider">Problem</p>
                        <p className="text-[#121212]/70">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#121212]/50 mb-1 uppercase tracking-wider">Solution</p>
                        <p className="text-[#121212]/70">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#121212]/50 mb-1 uppercase tracking-wider">Outcome</p>
                        <p className="text-[#121212] font-medium">{project.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
