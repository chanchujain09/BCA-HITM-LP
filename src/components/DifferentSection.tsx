import React from 'react';
import { 
  CheckCircle, Users, Clock, Award, Code2, 
  Sparkles, ShieldAlert, Library, Laptop, ArrowRight 
} from 'lucide-react';

export default function DifferentSection() {
  const points = [
    {
      title: "IIT-Guided Learning",
      description: "Learn from faculty who've been through India's most rigorous engineering programs — and bring that standard to every class."
    },
    {
      title: "AI & Emerging Tech Curriculum",
      description: "Go beyond basics. Master AI, Cloud, Cybersecurity and the technologies that are actually shaping industries right now."
    },
    {
      title: "AICTE-Standard Labs",
      description: "Work on high-end systems in labs built to national standards — because real learning needs real infrastructure."
    },
    {
      title: "Real-World Projects",
      description: "Build actual software applications, not just assignments. Graduate with a portfolio, not just a degree."
    }
  ];

  // Quick facts matching the exact metrics from reference image 1, styled as the 2x2 grid cards from reference image 2 in light mode
  const programFacts = [
    {
      label: "SEATS",
      value: "180",
      icon: <Users className="h-5 w-5 text-brand-blue" />,
      bgGradient: "from-brand-blue/10 to-brand-offwhite",
      borderColor: "border-brand-blue/20"
    },
    {
      label: "DURATION",
      value: "3 Years / 6 Sem",
      icon: <Clock className="h-5 w-5 text-brand-gold" />,
      bgGradient: "from-brand-gold/15 to-brand-offwhite",
      borderColor: "border-brand-gold/15"
    },
    {
      label: "ELIGIBILITY",
      value: "10+2 with 45%",
      icon: <Award className="h-5 w-5 text-brand-bronze" />,
      bgGradient: "from-brand-bronze/15 to-brand-offwhite",
      borderColor: "border-brand-bronze/15"
    },
    {
      label: "CORE LANGUAGE",
      value: "C++, Java, Python",
      icon: <Code2 className="h-5 w-5 text-brand-gray" />,
      bgGradient: "from-brand-gray/10 to-brand-offwhite",
      borderColor: "border-gray-300"
    }
  ];

  return (
    <section id="different" className="py-20 bg-brand-offwhite text-gray-900 font-sans relative overflow-hidden">
      {/* Soft ambient glows for a clean, premium light visual design */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: "Why HITM's BCA is Built Different" and benefits list */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 border border-brand-blue/25 px-3 py-1 rounded-full">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-blue">
                The HITM Advantage
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-brand-blue">
                Why HITM's BCA <br className="hidden sm:inline" />
                is <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-bronze to-brand-gold">Built Different</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
                Most BCA programs teach you to code. We teach you to think, build, and lead in a tech-driven world.
              </p>
            </div>

            {/* List of 4 points styled as clean elegant checkmarks in light theme */}
            <div className="space-y-6 pt-4 max-w-2xl">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="bg-brand-blue/5 text-brand-gold p-1.5 rounded-full border border-brand-blue/10 shrink-0 group-hover:bg-brand-blue/10 transition-colors">
                    <CheckCircle className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-base text-gray-900 tracking-wide">{point.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="#inquiry-form"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-bronze text-white hover:from-brand-bronze hover:to-brand-gold font-bold px-7 py-3 rounded-xl text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/20"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: 2x2 Grid of translucent fact metrics inspired by both Ref Image 1 & 2 */}
          <div className="lg:col-span-5">
            <div className="bg-[#eef1f3] border border-gray-200 p-6 md:p-8 rounded-3xl shadow-lg relative">
              
              {/* Highlight ribbon */}
              <div className="absolute -top-3 left-6 bg-brand-blue text-brand-offwhite text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Program Blueprint
              </div>

              <div className="mb-6 pt-2">
                <h3 className="font-display font-bold text-lg text-brand-blue">Key Academic Pillars</h3>
                <p className="text-xs text-gray-500 mt-1 font-light">Direct parameters for our upcoming Ranchi batch.</p>
              </div>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {programFacts.map((fact, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-brand-offwhite p-5 rounded-2xl border ${fact.borderColor} bg-gradient-to-b ${fact.bgGradient} flex flex-col justify-between h-32 transition-all duration-300 hover:border-brand-gold/30 hover:shadow-lg`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold">
                        {fact.label}
                      </span>
                      <div className="bg-brand-offwhite/80 p-1.5 rounded-lg border border-gray-200 shadow-sm">
                        {fact.icon}
                      </div>
                    </div>
                    <div>
                      <p className="font-display font-extrabold text-lg sm:text-xl text-brand-blue tracking-tight leading-none">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse"></span>
                  Admissions Open
                </span>
                <span>Batch Size Restrict: 180 seats</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
