const steps = [
  {
    number: '01',
    title: 'Understand your business',
    description: 'We start by listening. What do you do? Who do you serve? What matters most?',
  },
  {
    number: '02',
    title: 'Design with intent',
    description: 'Every element has a purpose. Every page tells your story.',
  },
  {
    number: '03',
    title: 'Build clean & custom',
    description: 'No shortcuts. No templates. Just thoughtful, quality work.',
  },
  {
    number: '04',
    title: 'Launch with care',
    description: 'We make sure everything works perfectly before you go live.',
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#F5F2EE] mb-20 tracking-tight text-center">
            Our process
          </h2>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start group">
                <div className="flex-shrink-0">
                  <div className="text-6xl md:text-7xl font-light text-[#C9A96E]/20 group-hover:text-[#C9A96E]/40 transition-colors duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl md:text-3xl font-light text-[#F5F2EE] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#F5F2EE]/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
