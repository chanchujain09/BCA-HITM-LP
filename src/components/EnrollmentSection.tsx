import React from 'react';
import { ArrowRight, FileDown, CheckCircle } from 'lucide-react';

export default function EnrollmentSection() {
  const enrollmentPoints = [
    "Students who want real tech skills, not just a degree.",
    "12th pass students building a career in software & AI.",
    "Learners guided by IIT faculty from Day 1.",
    "Students who want real projects, not textbook problems.",
    "Anyone who believes technology is the future."
  ];

  return (
    <section id="enrollment" className="py-24 bg-brand-offwhite border-y border-gray-200/50 font-sans relative overflow-hidden">
      {/* Absolute layout accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Layout Box - Split Grid mirroring the composition of the reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-brand-offwhite rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/40 border border-gray-200 items-stretch">
          
          {/* LEFT COLUMN: Hero Student Portrait & Superimposed Eligibility White Box */}
          <div className="lg:col-span-6 min-h-[420px] sm:min-h-[520px] relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
              alt="HITM Ranchi Aspiring Student" 
              className="absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.03] saturate-[1.05] transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Elegant overlay to enhance text contrast and bring premium depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-gray-900/10 to-transparent"></div>

            {/* Overlaid Eligibility Card exactly matching the reference style */}
            <div className="absolute bottom-8 left-6 right-6 md:left-8 md:right-8 bg-brand-offwhite/95 backdrop-blur-md p-7 rounded-2xl shadow-xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-1" id="eligibility-overlay-card">
              <h4 className="font-display font-black text-2xl sm:text-3xl text-brand-blue tracking-tight leading-none mb-2.5">
                Eligibility
              </h4>
              <p className="text-sm sm:text-base font-semibold text-gray-700 leading-snug mb-5">
                10+2 (Any Stream) with minimum 45%
              </p>
              <button 
                onClick={() => alert("Detailed eligibility guidelines: Students from Science, Commerce or Arts streams are eligible. Mathematics is NOT compulsory. Our technical bridge-classes support student transitions.")}
                className="border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold text-xs px-6 py-3 rounded-xl transition-all bg-transparent cursor-pointer tracking-wider uppercase font-display"
              >
                Know More
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: "Who Should Enroll" list & Gold/Bronze CTA */}
          <div className="lg:col-span-6 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-10 bg-[#eef1f3]">
            
            <div className="space-y-3">
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
                Who Should Enroll?
              </h3>
              <p className="text-sm text-gray-500 font-light max-w-md">
                Designed for ambitious minds aiming for high-growth software and artificial intelligence careers.
              </p>
              <div className="h-1.5 w-16 bg-gradient-to-r from-brand-gold to-brand-bronze rounded-full mt-2"></div>
            </div>

            {/* List with styled Gold bullet dots matching reference image precisely */}
            <div className="space-y-5">
              {enrollmentPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-gold mt-2 shrink-0 shadow-lg shadow-brand-gold/40 group-hover:bg-brand-bronze transition-colors duration-200"></div>
                  <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed group-hover:text-brand-blue transition-colors duration-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Download Brochure button with outstanding modern styling matching palette */}
            <div className="pt-2">
              <button 
                onClick={() => alert("Preparing your comprehensive HITM Admissions & Syllabus Guide. Download starting...")}
                className="bg-gradient-to-r from-brand-gold to-brand-bronze hover:from-brand-bronze hover:to-brand-gold text-white font-extrabold px-9 py-4 rounded-xl text-sm sm:text-base shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/35 transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer font-display tracking-wide"
              >
                <FileDown className="h-5 w-5 animate-pulse" />
                Download Brochure
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
