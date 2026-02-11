import { Sparkles, Layout, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Custom website design',
    description: 'Built for your business, not borrowed from a template.',
  },
  {
    icon: Layout,
    title: 'Thoughtful structure & flow',
    description: 'Every page, every click, every detail — designed with intent.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first experience',
    description: 'Beautiful on every screen, from phone to desktop.',
  },
  {
    icon: Zap,
    title: 'Clean performance',
    description: 'Fast, reliable, and built to last.',
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#F5F2EE] mb-20 tracking-tight text-center">
            What we do
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-[#1A1A1A] rounded-2xl transition-all duration-300 hover:bg-[#222] border border-[#F5F2EE]/5"
              >
                <service.icon className="w-10 h-10 text-[#C9A96E] mb-6 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-2xl font-light text-[#F5F2EE] mb-4">{service.title}</h3>
                <p className="text-[#F5F2EE]/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
