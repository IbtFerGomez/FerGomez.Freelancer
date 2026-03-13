import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Code2, Shield, Database, CheckCircle2, Workflow, FileCheck, Lock } from 'lucide-react';

const limsFeatures = [
    {
        icon: <Database className="text-electric" size={24} />,
        title: "Sample Tracking & Chain of Custody",
        desc: "End-to-end traceability from sample receipt to final reporting with full audit trails."
    },
    {
        icon: <FileCheck className="text-electric" size={24} />,
        title: "Instrument Integration",
        desc: "Automated data capture from HPLC, GC-MS, spectrophotometers, and other analytical equipment."
    },
    {
        icon: <Workflow className="text-electric" size={24} />,
        title: "Workflow Automation",
        desc: "Digitize SOPs, reduce manual errors, and ensure reproducible processes across all lab operations."
    },
    {
        icon: <Shield className="text-emerald" size={24} />,
        title: "GxP Compliance & 21 CFR Part 11",
        desc: "Electronic signatures, role-based access control, and tamper-proof data integrity for regulated environments."
    },
    {
        icon: <Lock className="text-emerald" size={24} />,
        title: "Data Security & Encryption",
        desc: "HIPAA-ready architecture with AES-256 encryption, secure APIs, and comprehensive logging."
    },
    {
        icon: <Code2 className="text-emerald" size={24} />,
        title: "Custom Reporting & Analytics",
        desc: "Real-time dashboards, trend analysis, and automated report generation in compliance-ready formats."
    }
];

const useCases = [
    {
        industry: "Pharmaceutical QC Labs",
        challenge: "Managing thousands of stability samples with strict FDA compliance.",
        solution: "Custom LIMS with automated deviation tracking and electronic batch records."
    },
    {
        industry: "Clinical Diagnostics",
        challenge: "Reducing turnaround time for patient results while maintaining CLIA compliance.",
        solution: "Real-time sample status tracking with automated alerts and result validation."
    },
    {
        industry: "Biotech R&D",
        challenge: "Centralizing experiment data from multiple instruments and team members.",
        solution: "Cloud-based LIMS with API integrations and collaborative workflows."
    }
];

const Hybrid = () => (
    <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Hero Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
        >
            <h2 className="text-white/60 font-mono text-xs tracking-[0.4em] uppercase mb-6 font-bold">
                The Hybrid Advantage
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                Laboratory Information <br />
                <span className="bg-gradient-to-r from-emerald to-electric bg-clip-text text-transparent">
                    Management Systems.
                </span>
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed">
                I design and develop <span className="text-white font-semibold">custom LIMS platforms</span> that bridge
                the gap between laboratory operations and enterprise software—combining scientific rigor with
                scalable backend architecture.
            </p>
        </motion.div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-glass border border-emerald/20 p-10 rounded-[40px]"
            >
                <FlaskConical className="text-emerald mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">I Speak Biology</h3>
                <p className="text-slate-500 leading-relaxed">
                    As a <span className="text-white">Biotechnology Engineer</span>, I understand lab workflows,
                    regulatory requirements (GLP, GMP, FDA 21 CFR Part 11), and the challenges of managing
                    complex scientific data.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-glass border border-electric/20 p-10 rounded-[40px]"
            >
                <Code2 className="text-electric mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">I Build Software</h3>
                <p className="text-slate-500 leading-relaxed">
                    With enterprise-level backend expertise in <span className="text-white">Java, Spring Boot,
                        and secure database design</span>, I architect LIMS solutions that are scalable, maintainable,
                    and audit-ready.
                </p>
            </motion.div>
        </div>

        {/* LIMS Features */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Core LIMS Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {limsFeatures.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="bg-glass border border-white/5 p-6 rounded-[40px] hover:border-white/20 transition-all group"
                    >
                        <div className="mb-6 transform group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h4 className="font-bold mb-3 text-white">
                            {feature.title}
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Real-World Applications</h3>
            <div className="space-y-6">
                {useCases.map((useCase, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="bg-glass border border-white/5 p-8 rounded-[40px] hover:border-white/10 transition-all"
                    >
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="text-emerald shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white">{useCase.industry}</h4>
                                <p className="text-slate-500 mb-3">
                                    <span className="text-slate-400 font-semibold">Challenge:</span> {useCase.challenge}
                                </p>
                                <p className="text-slate-300">
                                    <span className="text-electric font-semibold">Solution:</span> {useCase.solution}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="bg-gradient-to-br from-emerald/5 to-electric/5 border border-white/10 rounded-[40px] p-12 text-center backdrop-blur-sm"
        >
            <h3 className="text-3xl font-bold mb-4">
                Need a LIMS that actually <span className="text-transparent bg-gradient-to-r from-emerald to-electric bg-clip-text">understands your lab</span>?
            </h3>
            <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-lg">
                From requirements gathering to deployment, I'll build a custom laboratory information system
                tailored to your workflows, compliance needs, and data integrity requirements.
            </p>
            <button className="bg-white hover:bg-gradient-to-r hover:from-emerald hover:to-electric text-black hover:text-white px-8 py-4 rounded-2xl font-bold transition-all">
                Let's Design Your LIMS
            </button>
        </motion.div>
    </div>
);

export default Hybrid;