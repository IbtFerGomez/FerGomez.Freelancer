import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMutation } from '@tanstack/react-query';
import emailjs from '@emailjs/browser';
import { Send, ShieldCheck, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();

  const mutation = useMutation({
    mutationFn: async (formElement) => {
      // Credenciales proporcionadas
      const SERVICE_ID = 'Ibt.Fernandogomez';
      const TEMPLATE_ID = 'ContactPorfolio';
      const PUBLIC_KEY = 'BD9JSsjNwMtxaR616';

      return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, PUBLIC_KEY);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(e.target);
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2 className="text-electric font-mono text-xs tracking-[0.4em] uppercase mb-6 font-bold">Secure Communication</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
          Let's Build <span className="text-slate-600">Together.</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-xl">
          Connect with the <span className="text-white font-semibold">Logical Architect</span> to discuss LIMS, Backend systems, or Biotech R&D.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        {/* Info Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-glass border border-white/5 flex items-center justify-center group-hover:border-electric/50 transition-colors">
              <Mail className="text-electric" size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email</p>
              <p className="text-sm text-slate-200">fegomu.ibt@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-glass border border-white/5 flex items-center justify-center group-hover:border-emerald/50 transition-colors">
              <ShieldCheck className="text-emerald" size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Compliance</p>
              <p className="text-sm text-slate-200">FDA 21 CFR Part 11 Ready</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-glass border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-colors">
              <MapPin className="text-white" size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Location</p>
              <p className="text-sm text-slate-200">Remote / Global</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          ref={formRef}
          onSubmit={handleSubmit} 
          className="lg:col-span-2 space-y-6 bg-glass p-10 rounded-[40px] border border-white/5 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 ml-1 font-bold">Name</label>
              <input 
                name="name" 
                required 
                className="w-full bg-ink-black border border-white/10 p-4 rounded-2xl focus:border-electric outline-none transition-all text-white placeholder:text-slate-600" 
                placeholder="Full Name / Company" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 ml-1 font-bold">Email</label>
              <input 
                name="email" 
                type="email" 
                required 
                className="w-full bg-ink-black border border-white/10 p-4 rounded-2xl focus:border-electric outline-none transition-all text-white placeholder:text-slate-600" 
                placeholder="email@address.com" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 ml-1 font-bold">Project Category</label>
            <select 
              name="type" 
              className="w-full bg-ink-black border border-white/10 p-4 rounded-2xl focus:border-electric outline-none transition-all text-slate-300"
            >
              <option value="LIMS">LIMS & Lab Automation</option>
              <option value="Backend">Backend Architecture (Java/Spring)</option>
              <option value="Biotech">Biotech Consulting</option>
              <option value="FullStack">Full-Stack Development</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-slate-500 ml-1 font-bold">Message</label>
            <textarea 
              name="message" 
              required 
              className="w-full bg-ink-black border border-white/10 p-4 rounded-2xl focus:border-electric outline-none transition-all h-40 resize-none text-white placeholder:text-slate-600" 
              placeholder="Describe your project or challenge..."
            />
          </div>

          <button 
            type="submit"
            disabled={mutation.isPending}
            className="w-full py-5 bg-white hover:bg-electric text-black hover:text-white font-bold rounded-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {mutation.isPending ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>

          {mutation.isSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-emerald/10 border border-emerald/20 p-4 rounded-2xl"
            >
               <p className="text-emerald text-center text-sm font-bold">
                 ✓ Message sent successfully! I'll get back to you soon.
               </p>
            </motion.div>
          )}

          {mutation.isError && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl"
            >
              <p className="text-red-500 text-center text-sm font-bold">
                ⚠ Error sending message. Please try again or email directly.
              </p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;