import React from 'react';
import { 
  Building, Briefcase, GraduationCap, CheckCircle2, 
  TrendingUp, Compass, Award, Building2
} from 'lucide-react';

export default function PlacementSection() {
  const preparationSteps = [
    {
      title: "Technical Mock Interviews",
      desc: "Prepare for algorithm coding rounds with expert engineers from top startups & MNCs."
    },
    {
      title: "Resume & Portfolio Build",
      desc: "Compile professional-grade projects on GitHub highlighting AI systems and React portals."
    },
    {
      title: "Soft Skills & Communication",
      desc: "Intensive training on client communications, presentations, and technical writing."
    }
  ];

  return (
    <section id="placement" className="py-20 bg-brand-offwhite border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-blue tracking-wider uppercase bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
            Active Placement Division
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 mt-4 tracking-tight leading-tight">
            100% Placement Assistance & Technical Readiness
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Our placement team connects students directly with tech recruiters and emerging startups, helping you secure high-growth career profiles immediately upon graduation.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stats and Info Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#eef1f3] p-6 rounded-2xl border border-gray-200 shadow-lg flex items-start gap-4">
              <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-xl shrink-0">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-gray-900">Career Acceleration & Placement Support</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed font-light">
                  Students participate in customized placement bootcamps starting from Semester 4. We review resume standards, practice technical coding rounds, and host simulated HR interviews.
                </p>
              </div>
            </div>

            <div className="bg-[#eef1f3] p-6 rounded-2xl border border-gray-200 shadow-lg flex items-start gap-4">
              <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-xl shrink-0">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-gray-900">6-Month Paid Capstone Internship</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed font-light">
                  Every HITM Ranchi student spends their final semester inside a corporate technology department or coding studio, earning valuable practical work experience.
                </p>
              </div>
            </div>

            {/* Quick highlights checklist */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                <span>IIT-Guided Projects</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Alumni Support Network</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Ranchi Placement Drive</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Startup Incubator Access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Training Curriculum details */}
          <div className="lg:col-span-6 bg-brand-blue text-brand-offwhite p-6 sm:p-8 rounded-2xl shadow-xl border border-brand-blue/40 relative">
            <h4 className="font-display font-extrabold text-xl text-white mb-6">Corporate Training Pipeline</h4>
            
            <div className="space-y-6">
              {preparationSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="font-mono text-xs font-bold bg-[#1d354e] text-brand-gold h-6 w-6 rounded-full flex items-center justify-center shrink-0 border border-brand-blue/40 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h5 className="font-bold text-sm text-white">{step.title}</h5>
                    <p className="text-xs text-brand-offwhite/75 mt-1 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#132334] border border-[#1d354e] rounded-xl p-4 mt-8 flex justify-between items-center text-xs">
              <div>
                <p className="text-[10px] text-brand-offwhite/50 uppercase tracking-wider font-bold">Top Roles Offered</p>
                <p className="text-white font-semibold mt-1">Data Analyst, Junior AI Engineer, Front-End Developer</p>
              </div>
              <a 
                href="#inquiry-form"
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-bold px-3 py-1.5 rounded-lg text-[11px] shrink-0"
              >
                Inquire Admissions
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
