import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code2, Database, Shield, Zap, GitBranch, Layers, CloudCog } from 'lucide-react';

const techStack = [
    {
        category: "Backend & APIs",
        icon: <Server className="text-electric" size={24} />,
        technologies: ["Java 17+", "Spring Boot", "Spring Security", "RESTful APIs", "Microservices"]
    },
    {
        category: "Databases",
        icon: <Database className="text-electric" size={24} />,
        technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Liquibase/Flyway"]
    },
    {
        category: "Architecture",
        icon: <Layers className="text-electric" size={24} />,
        technologies: ["Clean Architecture", "Domain-Driven Design (DDD)", "CQRS", "Event Sourcing"]
    },
    {
        category: "DevOps & Cloud",
        icon: <CloudCog className="text-electric" size={24} />,
        technologies: ["Docker", "Kubernetes", "CI/CD (Jenkins, GitHub Actions)", "AWS/Azure"]
    },
    {
        category: "Security",
        icon: <Shield className="text-electric" size={24} />,
        technologies: ["OAuth 2.0", "JWT", "Data Encryption", "Audit Logging", "FDA 21 CFR Part 11"]
    },
    {
        category: "Version Control",
        icon: <GitBranch className="text-electric" size={24} />,
        technologies: ["Git", "GitFlow", "Conventional Commits", "Code Review Best Practices"]
    }
];

const services = [
    {
        title: "Scalable Backend Development",
        desc: "Building high-performance Java/Spring Boot APIs designed for growth, compliance, and maintainability.",
        icon: <Code2 size={24} className="text-electric" />
    },
    {
        title: "Microservices Architecture",
        desc: "Decomposing monoliths into independent, deployable services with clear domain boundaries.",
        icon: <Layers size={24} className="text-electric" />
    },
    {
        title: "Database Design & Optimization",
        desc: "Schema design, indexing strategies, query optimization, and migration management for relational and NoSQL databases.",
        icon: <Database size={24} className="text-electric" />
    },
    {
        title: "Performance & Security Audits",
        desc: "Code reviews, penetration testing guidance, and architectural refactoring to meet enterprise standards.",
        icon: <Zap size={24} className="text-electric" />
    }
];

const Software = () => (
    <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Hero Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
        >
            <h2 className="text-electric font-mono text-xs tracking-[0.4em] uppercase mb-6 font-bold">
                Backend Engineering
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                Enterprise-Grade <br />
                <span className="text-slate-600">Software Architecture.</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
                Senior Backend Developer specializing in <span className="text-white font-semibold">Java, Spring Boot, and Microservices</span>.
                I design systems that scale, comply, and last.
            </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Arsenal</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((stack, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-glass border border-white/5 p-6 rounded-[40px] hover:border-electric/30 transition-all group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="transform group-hover:scale-110 transition-transform">
                                {stack.icon}
                            </div>
                            <h4 className="font-bold text-white">{stack.category}</h4>
                        </div>
                        <ul className="space-y-2">
                            {stack.technologies.map((tech, j) => (
                                <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-electric"></span>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">What I Build</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="bg-glass border border-white/5 p-8 rounded-[40px] hover:border-electric/30 transition-all group"
                    >
                        <div className="mb-6 transform group-hover:scale-110 transition-transform">
                            {service.icon}
                        </div>
                        <h4 className="text-xl font-bold mb-3 group-hover:text-electric transition-colors">
                            {service.title}
                        </h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-glass border border-electric/20 rounded-[40px] p-12 text-center"
        >
            <h3 className="text-3xl font-bold mb-4">
                Ready to build something <span className="text-electric">bulletproof</span>?
            </h3>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto text-lg">
                Let's architect a backend system that your team can trust and scale.
            </p>
            <button className="bg-electric hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold transition-all">
                Start Your Project
            </button>
        </motion.div>
    </div>
);

export default Software;