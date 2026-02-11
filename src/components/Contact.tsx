import { useState } from 'react';
import { MessageCircle, Send, Loader2 } from 'lucide-react';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+1234567890';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'other',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const apiUrl = `${supabaseUrl}/functions/v1/contact-form`;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({ name: '', email: '', businessType: 'other', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try WhatsApp instead.');
      console.error('Form submission error:', error);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in building a website with NexuraBuild.`
    );
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-[#121212]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#F5F2EE] mb-6 tracking-tight">
              Let's build something that fits
            </h2>
            <p className="text-xl text-[#F5F2EE]/60">
              Start a conversation — no pressure, no sales pitch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <button
              onClick={handleWhatsApp}
              className="group p-8 bg-[#25D366]/10 border-2 border-[#25D366]/30 rounded-2xl transition-all duration-300 hover:bg-[#25D366]/20 hover:border-[#25D366]/50"
            >
              <MessageCircle className="w-12 h-12 text-[#25D366] mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-light text-[#F5F2EE] mb-2">WhatsApp</h3>
              <p className="text-[#F5F2EE]/60">Quick response, personal touch</p>
            </button>

            <div className="p-8 bg-[#1A1A1A] border-2 border-[#C9A96E]/30 rounded-2xl flex flex-col justify-center">
              <Send className="w-12 h-12 text-[#C9A96E] mb-4" />
              <h3 className="text-2xl font-light text-[#F5F2EE] mb-2">Contact Form</h3>
              <p className="text-[#F5F2EE]/60">We'll get back to you within 24 hours</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[#F5F2EE]/80 mb-2 text-sm tracking-wide">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-[#1A1A1A] border border-[#F5F2EE]/10 rounded-xl text-[#F5F2EE] focus:outline-none focus:border-[#C9A96E]/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#F5F2EE]/80 mb-2 text-sm tracking-wide">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-[#1A1A1A] border border-[#F5F2EE]/10 rounded-xl text-[#F5F2EE] focus:outline-none focus:border-[#C9A96E]/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessType" className="block text-[#F5F2EE]/80 mb-2 text-sm tracking-wide">
                Business type
              </label>
              <select
                id="businessType"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-6 py-4 bg-[#1A1A1A] border border-[#F5F2EE]/10 rounded-xl text-[#F5F2EE] focus:outline-none focus:border-[#C9A96E]/50 transition-colors"
              >
                <option value="cafe">Café / Restaurant</option>
                <option value="studio">Studio / Agency</option>
                <option value="service">Service Business</option>
                <option value="startup">Startup</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-[#F5F2EE]/80 mb-2 text-sm tracking-wide">
                Tell us about your project
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-[#1A1A1A] border border-[#F5F2EE]/10 rounded-xl text-[#F5F2EE] focus:outline-none focus:border-[#C9A96E]/50 transition-colors resize-none"
                placeholder="What kind of website are you looking for? What matters most to you?"
              />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl text-[#25D366] text-center">
                Thanks for reaching out! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-[#C9A96E] text-[#121212] rounded-xl font-medium text-lg transition-all duration-300 hover:bg-[#B8986A] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                'Start a conversation'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
