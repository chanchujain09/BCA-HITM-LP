import React from 'react';
import { School, Phone, Users, ShieldCheck, Mail, Sparkles } from 'lucide-react';

interface HeaderProps {
  onAdminToggle: () => void;
  isAdminOpen: boolean;
  totalLeads: number;
}

export default function Header({ onAdminToggle, isAdminOpen, totalLeads }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f6f7]/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      {/* Top Banner - Alert / Urgency */}
      <div className="bg-gradient-to-r from-brand-blue via-[#2b4c70] to-[#1a334d] text-brand-offwhite text-xs md:text-sm py-2 px-4 flex justify-between items-center font-sans">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <span className="inline-flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
          </span>
          <span className="font-semibold tracking-wide">Admissions Open for BCA Batch 2026-2029!</span>
          <span className="hidden md:inline text-white/80">|</span>
          <span className="hidden md:inline font-light">Learn from IIT Faculty & Master AI in Ranchi.</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs font-medium">
          <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-brand-gold transition-colors">
            <Phone className="h-3.5 w-3.5" /> +91 91234 56789
          </a>
          <a href="mailto:admissions@hitm.edu.in" className="flex items-center gap-1 hover:text-brand-gold transition-colors">
            <Mail className="h-3.5 w-3.5" /> admissions@hitm.edu.in
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-brand-blue text-brand-offwhite p-2.5 rounded-lg shadow-md shadow-brand-blue/20 group-hover:bg-[#1a334d] transition-all duration-300">
            <School className="h-6 w-6" id="header-logo-icon" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-gray-900 leading-none">
                HITM
              </span>
              <span className="bg-brand-gold/15 text-brand-gold text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                Ranchi
              </span>
            </div>
            <span className="text-[9px] md:text-[10px] text-gray-500 font-sans tracking-wide uppercase font-medium mt-1 leading-none hidden sm:block">
              Haider Institute of Technology & Management
            </span>
          </div>
        </a>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#different" className="hover:text-brand-blue transition-colors">Why HITM?</a>
            <a href="#enrollment" className="hover:text-brand-blue transition-colors">Who Should Enroll?</a>
            <a href="#opportunities" className="hover:text-brand-blue transition-colors">Careers</a>
            <a href="#faq" className="hover:text-brand-blue transition-colors">FAQs</a>
          </nav>

          {/* Leads Dashboard Trigger */}
          <button
            id="admin-dashboard-toggle-btn"
            onClick={onAdminToggle}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-300 ${
              isAdminOpen
                ? 'bg-brand-blue/10 text-brand-blue border-brand-blue/20 shadow-sm'
                : 'bg-[#eef1f3] text-gray-600 border-gray-200 hover:bg-gray-200'
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
            <span className="hidden sm:inline">Leads Panel</span>
            {totalLeads > 0 && (
              <span className="bg-brand-gold text-brand-dark text-[10px] font-bold h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center animate-pulse">
                {totalLeads}
              </span>
            )}
          </button>

          {/* Call to Action button */}
          <a
            id="header-apply-cta-btn"
            href="#inquiry-form"
            className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark text-xs md:text-sm font-semibold px-4 md:px-5 py-2.5 rounded-lg shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/20 transition-all duration-300 transform hover:-translate-y-0.5 font-sans"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}
