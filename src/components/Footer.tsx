import React from 'react';
import { School, MapPin, Phone, Mail, Award, BookOpen, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Institute Branding */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-red-700 p-2 rounded-lg text-white">
                <School className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white leading-none">
                HITM <span className="text-red-400 font-normal text-sm">Ranchi</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Haider Institute of Technology & Management is Jharkhand's premier computer application and emergent sciences hub, providing world-class technical skills under the mentorship of IIT alumni faculty.
            </p>
            <div className="flex gap-2">
              <span className="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono uppercase px-2 py-1 rounded">
                UGC Core Curriculum
              </span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono uppercase px-2 py-1 rounded">
                AICTE Standard Lab
              </span>
            </div>
          </div>

          {/* Column 2: Program Navigation */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-red-400">
              The BCA Program
            </h4>
            <div className="flex flex-col gap-2 text-xs text-slate-400">
              <a href="#different" className="hover:text-white transition-colors">Why HITM?</a>
              <a href="#enrollment" className="hover:text-white transition-colors">Who Should Enroll?</a>
              <a href="#opportunities" className="hover:text-white transition-colors">Career Opportunities</a>
              <a href="#faq" className="hover:text-white transition-colors">Admission FAQs</a>
              <a href="#inquiry-form" className="hover:text-white transition-colors">Apply Admissions</a>
            </div>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-red-400">
              Admissions Office
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  HITM Campus, Main Road, near Tech Hub Circle, Ranchi, Jharkhand - 834001
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-red-500 shrink-0" />
                <span>+91 91234 56789 (Admissions Desk)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-red-500 shrink-0" />
                <span>admissions@hitm.edu.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Haider Institute of Technology & Management, Ranchi. All academic standards adhere strictly to statutory provisions.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Terms of Admission</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Charter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
