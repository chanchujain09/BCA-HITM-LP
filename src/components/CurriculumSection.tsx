import React, { useState } from 'react';
import { 
  Terminal, ShieldCheck, Database, Cpu, Sparkles, Code, 
  Workflow, Layers, FileCode2, ArrowRight
} from 'lucide-react';

interface CurriculumYear {
  year: string;
  focus: string;
  subjects: string[];
  icon: React.ReactNode;
}

export default function CurriculumSection() {
  const [activeYear, setActiveYear] = useState<number>(0);

  const curriculum: CurriculumYear[] = [
    {
      year: "Year 1",
      focus: "Foundations & Modern Coding",
      icon: <Code className="h-5 w-5" />,
      subjects: [
        "Computer Programming in Python & C++",
        "Data Structures & Algorithm Design",
        "Modern Web Development (HTML5, Tailwind, JavaScript)",
        "Database Management Systems (PostgreSQL)",
        "Mathematical Foundations for Computing & Stats"
      ]
    },
    {
      year: "Year 2",
      focus: "Cloud Systems & Software Engineering",
      icon: <Layers className="h-5 w-5" />,
      subjects: [
        "Advanced Software Design & React.js",
        "Linux Systems, Shell Scripting & Git",
        "Cloud Computing Architecture (AWS/GCP)",
        "Discrete Mathematics & Vector Calculus",
        "Introduction to Artificial Intelligence (Search, Logic)"
      ]
    },
    {
      year: "Year 3",
      focus: "Machine Learning, Deep Learning & Thesis",
      icon: <Cpu className="h-5 w-5" />,
      subjects: [
        "Practical Machine Learning & Scikit-Learn",
        "Deep Learning Networks (PyTorch & TensorFlow)",
        "Natural Language Processing & LLM Deployment",
        "Software Capstone: Real-world Full-Stack Project",
        "6-Month Paid Industry Residency / Internship"
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-brand-offwhite font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Year Timeline Selector */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-brand-blue tracking-wider uppercase bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20 inline-block">
              AI-Infused Tech Syllabus
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight leading-none">
              Not Just a BCA. <br />
              An AI Engineering Launchpad.
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light">
              Conventional computer applications courses often teach decades-old material. At HITM, we have engineered an industry-relevant curriculum focusing heavily on AI pipelines, software systems, and data science.
            </p>

            {/* Year selectors tabs */}
            <div className="space-y-3 pt-4">
              {curriculum.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveYear(idx)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left cursor-pointer ${
                    activeYear === idx
                      ? 'bg-brand-blue/10 text-brand-blue border-brand-blue/25 shadow-sm'
                      : 'bg-[#eef1f3] text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activeYear === idx ? 'bg-brand-blue text-brand-offwhite' : 'bg-gray-300 text-gray-700'}`}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider leading-none">{c.year}</p>
                      <p className="text-sm font-semibold mt-1">{c.focus}</p>
                    </div>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition-transform ${activeYear === idx ? 'translate-x-1 text-brand-blue' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Active Year Subjects View */}
          <div className="lg:col-span-7 bg-brand-blue text-brand-offwhite rounded-2xl p-6 sm:p-8 shadow-2xl border border-brand-blue/50 relative overflow-hidden">
            {/* Ambient Background Tech Matrix Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/15 rounded-full blur-[80px]"></div>
            
            <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-wider mb-6">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Syllabus Details • {curriculum[activeYear].year} Specialization
            </div>

            <h3 className="font-display font-extrabold text-xl md:text-2xl text-white mb-2 leading-tight">
              {curriculum[activeYear].focus}
            </h3>
            <p className="text-xs text-brand-offwhite/70 font-light mb-6">
              Core academic and laboratory modules designed to build hands-on mastery.
            </p>

            <div className="space-y-4">
              {curriculum[activeYear].subjects.map((subj, sidx) => (
                <div 
                  key={sidx} 
                  className="flex items-start gap-3 bg-[#1d354e]/60 p-4 rounded-xl border border-brand-blue/40 hover:border-brand-blue/20 transition-all duration-300"
                >
                  <div className="bg-brand-gold/20 text-brand-gold p-1.5 rounded-lg border border-brand-gold/30 text-xs font-mono">
                    0{sidx + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-snug">{subj}</p>
                    <p className="text-[11px] text-brand-offwhite/60 mt-1">Includes mandatory lab work, hands-on GitHub coding submissions, and peer code evaluations.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-[#1d354e] pt-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
              <span className="text-brand-offwhite/60 font-mono">130+ Total Credits • AICTE Compliant Standards</span>
              <a 
                href="#inquiry-form"
                className="bg-brand-gold hover:bg-brand-gold/95 text-brand-dark font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-md shadow-brand-gold/10 transition-all cursor-pointer"
              >
                Inquire For Fee Details
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
