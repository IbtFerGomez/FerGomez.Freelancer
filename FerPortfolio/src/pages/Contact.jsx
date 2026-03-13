import React, { useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const mutation = useMutation({
    mutationFn: async (formElement) => {
      // Reemplaza estos 3 strings con tus IDs de EmailJS
      const SERVICE_ID = 'TU_SERVICE_ID';
      const TEMPLATE_ID = 'TU_TEMPLATE_ID';
      const PUBLIC_KEY = 'TU_PUBLIC_KEY';

      return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, PUBLIC_KEY);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(e.target);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-center mb-12 uppercase tracking-tighter">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Initialize Collaboration</h1>
        <p className="text-slate-500 font-mono">Secure Transmission Protocol / Life Sciences & IT</p>
      </div>

      <form 
        ref={formRef}
        onSubmit={handleSubmit} 
        className="space-y-6 bg-soft-glass p-8 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden"
      >
        {/* Decoración sutil de fondo para el formulario */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-logic-blue/5 blur-[80px]" />
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1 font-bold">Sender Name</label>
            <input name="name" required className="w-full bg-space-black border border-white/10 p-4 rounded-2xl focus:border-logic-blue outline-none transition-all text-white" placeholder="Dr. Jane Smith" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1 font-bold">Digital Address</label>
            <input name="email" type="email" required className="w-full bg-space-black border border-white/10 p-4 rounded-2xl focus:border-logic-blue outline-none transition-all text-white" placeholder="jane@biotech.co" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1 font-bold">Domain of Interest</label>
          <select name="type" className="w-full bg-space-black border border-white/10 p-4 rounded-2xl focus:border-logic-blue outline-none transition-all text-slate-300">
            <option value="LIMS">LIMS & Automation Architecture</option>
            <option value="Backend">Enterprise Backend (Java/Spring)</option>
            <option value="Biotech">Scientific Data Consulting</option>
            <option value="Staff">Staff Augmentation</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-slate-500 ml-1 font-bold">Project Abstract</label>
          <textarea name="message" required className="w-full bg-space-black border border-white/10 p-4 rounded-2xl focus:border-logic-blue outline-none transition-all h-40 resize-none text-white" placeholder="Outline your technical or scientific requirements..."></textarea>
        </div>

        <button 
          type="submit"
          disabled={mutation.isPending}
          className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-logic-blue hover:text-white transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {mutation.isPending ? 'ENCRYPTING & SENDING...' : 'DISPATCH MESSAGE'}
        </button>

        {mutation.isSuccess && (
          <div className="bg-bio-green/10 border border-bio-green/20 p-4 rounded-2xl">
             <p className="text-bio-green text-center text-sm font-bold tracking-tight">
               ✓ PROTOCOL SUCCESS: Message delivered to the Logical Architect.
             </p>
          </div>
        )}

        {mutation.isError && (
          <p className="text-red-500 text-center text-sm font-bold">
            ⚠ UPLINK ERROR: Please check your connection or try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;