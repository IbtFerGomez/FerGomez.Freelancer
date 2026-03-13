import React from 'react';
import { useMutation } from '@tanstack/react-query';

const Contact = () => {
  // Simulamos una petición a una API
  const mutation = useMutation({
    mutationFn: async (formData) => {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simula latencia de red
      console.log("Form Data Sent:", formData);
      return { success: true };
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    mutation.mutate(data);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Let's build the future of Bio-IT.</h1>
        <p className="text-slate-400">Describe your project and I'll get back to you within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-soft-glass p-8 md:p-12 rounded-[40px] border border-white/5">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
            <input name="name" required className="w-full bg-space-black border border-white/10 p-4 rounded-2xl focus:border-logic-blue outline-none transition-all" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
            <input name="email" type="email" required className="w-full bg-space-black border border-white/10 p-4 rounded-2xl focus:border-logic-blue outline-none transition-all" placeholder="john@company.com" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400 ml-1">Project Type</label>
          <select name="type" className="w-full bg-space-black border border-white/10 p-4 rounded-2xl focus:border-logic-blue outline-none transition-all appearance-none text-slate-300">
            <option>Backend Architecture (Java/Spring)</option>
            <option>LIMS Development</option>
            <option>Biotech Data Consulting</option>
            <option>Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
          <textarea name="message" required className="w-full bg-space-black border border-white/10 p-4 rounded-2xl focus:border-logic-blue outline-none transition-all h-40 resize-none" placeholder="Tell me about your technical challenges..."></textarea>
        </div>

        <button 
          type="submit"
          disabled={mutation.isPending}
          className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-logic-blue hover:text-white transition-all disabled:opacity-50"
        >
          {mutation.isPending ? 'Transmitting Data...' : 'Send Message'}
        </button>

        {mutation.isSuccess && (
          <p className="text-bio-green text-center font-medium animate-pulse">
            ✓ Message received. The Logical Architect will contact you soon.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;