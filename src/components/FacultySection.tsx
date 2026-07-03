import React from 'react';
import { Award, GraduationCap, ChevronRight, BookOpen, BrainCircuit } from 'lucide-react';
import { FacultyMember } from '../types';

export default function FacultySection() {
  const faculties: FacultyMember[] = [
    {
      name: "Dr. Alok Ranjan",
      role: "Dean of Computer Science & AI",
      education: "Ph.D. in AI, IIT Kharagpur",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      background: "Former lead researcher at BARC, with 15+ years of teaching computer systems and neural networks."
    },
    {
      name: "Prof. Haider Ali",
      role: "Director & Head of emerging Tech",
      education: "M.Tech, Ph.D. from IIT Kanpur",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      background: "Former Principal Systems Engineer at a global tech conglomerate, focusing on Cloud computing & distributed AI systems."
    },
    {
      name: "Dr. Meera Sen",
      role: "Professor of Software Engineering",
      education: "M.S., Ph.D. from IIT Madras",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      background: "Full-Stack architect with extensive research credentials in scalable cloud APIs & DevOps workflows."
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-brand-offwhite border-y border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-blue tracking-wider uppercase bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
            India's Leading Minds
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 mt-4 tracking-tight leading-tight">
            Learn From IIT Faculty & Tech Industry Leaders
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            Gain theoretical foundations and hands-on coding paradigms directly from instructors who have shaped Indian technology education at premier IIT institutions.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculties.map((fac, i) => (
            <div 
              key={i} 
              className="bg-[#eef1f3] rounded-2xl border border-gray-200 shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue/25"
            >
              {/* Profile Pic with decorative badge */}
              <div className="relative">
                <img 
                  src={fac.avatar} 
                  alt={fac.name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-brand-blue/10 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -bottom-1 -right-1 bg-brand-blue text-brand-offwhite p-1 rounded-full shadow">
                  <GraduationCap className="h-4 w-4" />
                </span>
              </div>

              {/* Faculty Information */}
              <h3 className="font-display font-bold text-lg text-gray-900 mt-5 leading-none">{fac.name}</h3>
              <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mt-2 bg-brand-blue/10 px-2 py-0.5 rounded">
                {fac.role}
              </p>
              <p className="text-xs font-semibold text-gray-500 mt-1">{fac.education}</p>
              
              <p className="text-xs text-gray-600 mt-4 leading-relaxed font-light border-t border-gray-200 pt-4">
                {fac.background}
              </p>

              {/* Action Link inside card */}
              <button 
                onClick={() => alert(`Showing complete research publications and academic portfolio for ${fac.name}.`)}
                className="mt-6 text-xs font-semibold text-brand-blue flex items-center gap-0.5 hover:text-brand-gold transition-all bg-transparent border-0 cursor-pointer"
              >
                View Academic Portfolio <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-brand-blue rounded-2xl p-6 md:p-8 mt-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-blue/30">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="bg-brand-blue/40 p-3 rounded-xl hidden sm:block">
              <BrainCircuit className="h-8 w-8 text-brand-gold" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg md:text-xl">Have a Question About the Program?</h4>
              <p className="text-xs text-brand-offwhite/80 font-light mt-0.5">Schedule an exclusive 1-on-1 counselor session with our academic leads.</p>
            </div>
          </div>
          <a 
            href="#inquiry-form"
            className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark text-xs md:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all shrink-0 cursor-pointer"
          >
            Request Free Counseling
          </a>
        </div>

      </div>
    </section>
  );
}
