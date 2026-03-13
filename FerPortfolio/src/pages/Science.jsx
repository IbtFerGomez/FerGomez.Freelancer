import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, FlaskConical, LineChart, FileCheck, Dna, Database } from 'lucide-react';

const capabilities = [
    {
        icon: <Dna className="text-emerald" size={28} />,
        title: "Biotechnology Engineering",
        desc: "Deep understanding of molecular biology, genetics, and bioprocessing. Trained to translate lab protocols into digital systems."
    },
    {
        icon: <Microscope className="text-emerald" size={28} />,
        title: "Laboratory Operations",
        desc: "Hands-on experience in analytical techniques, quality control, and GxP-regulated environments."
    },
    {
        icon: <LineChart className="text-emerald" size={28} />,
        title: "Data Analysis & Modeling",
        desc: "Statistical validation, experimental design, and interpretation of complex biological datasets."
    },
    {
        icon: <FileCheck className="text-emerald" size={28} />,
        title: "Regulatory Compliance",
        desc: "In-depth knowledge of FDA 21 CFR Part 11, GLP, GMP, and ISO standards for pharmaceutical and biotech industries."
    },
    {
        icon: <FlaskConical className="text-emerald" size={28} />,
        title: "R&D Project Management",
        desc: "From hypothesis to market validation—designing experiments, managing resources, and scaling innovations."
    },
    {
        icon: <Database className="text-emerald" size={28} />,
        title: "Bioinformatics Integration",
        desc: "Connecting wet-lab data with computational tools for genomics, proteomics, and systems biology."
    }
];

const Science = () => (
    <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Hero Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
        >
            <h2 className="text-emerald font-mono text-xs tracking-[0.4em] uppercase mb-6 font-bold">
                Scientific Foundation
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                Where Biology Meets <br />
                <span className="text-slate-600">Data Integrity.</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
                As a <span className="text-white font-semibold">Biotechnology Engineer</span>, I bring the scientific method,
                regulatory awareness, and experimental rigor to every line of code I write.
            </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {capabilities.map((cap, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-glass border border-white/5 p-8 rounded-[40px] hover:border-emerald/30 transition-all"
                >
                    <div className="mb-6 transform group-hover:scale-110 transition-transform">
                        {cap.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-emerald transition-colors">
                        {cap.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        {cap.desc}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-glass border border-emerald/20 rounded-[40px] p-12 text-center"
        >
            <h3 className="text-3xl font-bold mb-4">
                Need a <span className="text-emerald">scientifically-trained</span> developer?
            </h3>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto text-lg">
                I speak both the language of the lab and the logic of enterprise systems.
            </p>
            <button className="bg-emerald hover:bg-green-400 text-black px-8 py-4 rounded-2xl font-bold transition-all">
                Discuss Your Project
            </button>
        </motion.div>
    </div>
);

export default Science;