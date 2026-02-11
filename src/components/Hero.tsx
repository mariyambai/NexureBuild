import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#121212]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A96E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A96E] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#F5F2EE] mb-8 tracking-tight leading-tight">
            Your business, done properly online.
          </h1>
          <p className="text-xl md:text-2xl text-[#F5F2EE]/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Custom websites built for businesses that care about how they're seen.
          </p>
          <button
            onClick={onContactClick}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A96E] text-[#121212] rounded-full font-medium text-lg transition-all duration-300 hover:bg-[#B8986A] hover:gap-4"
          >
            Let's talk
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#F5F2EE]/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#F5F2EE]/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
