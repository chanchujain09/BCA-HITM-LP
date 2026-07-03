import React from 'react';
import { 
  Sparkles, CheckCircle, GraduationCap, ArrowRight, 
  Terminal, ShieldCheck, Award, Zap, Code, HeartHandshake
} from 'lucide-react';
import InquiryForm from './InquiryForm';
import { Lead } from '../types';

interface HeroSectionProps {
  onLeadSubmit: (lead: Omit<Lead, 'id' | 'submittedAt' | 'status'>) => void;
}

export default function HeroSection({ onLeadSubmit }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-brand-dark flex items-center py-12 md:py-20 overflow-hidden">
      {/* Background Campus Image with Overlay mirroring the reference style */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80"
          alt="HITM Ranchi Tech Campus"
          className="w-full h-full object-cover object-center opacity-30 filter scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Deep, rich gradient overlay to maximize readability and match the brand's premium dark navy aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-blue/40 md:from-brand-dark md:via-brand-dark/90 md:to-transparent"></div>
        {/* Secondary decorative color gradients */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-bronze/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Clean, High-Impact Content focusing exactly on requested copy */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-brand-offwhite">
            
            {/* Admissions Status Indicator */}
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 px-4 py-2 rounded-full animate-fadeIn font-sans">
              <Sparkles className="h-4 w-4 text-brand-gold animate-pulse" />
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-brand-gold">
                Admissions Open 2026-2029
              </span>
            </div>

            {/* Main Title Typography with premium display font - Using your exact copy */}
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
                Jharkhand ka best <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold to-brand-bronze">
                  BCA Program
                </span> <br />
                — ab Ranchi mein.
              </h1>
              <p className="text-brand-gray font-sans text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                Learn from IIT Faculty, master AI & emerging tech, and build a future-ready career at Haider Institute of Technology & Management, Ranchi.
              </p>
            </div>

            {/* Action Triggers */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#inquiry-form"
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-semibold px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow-lg shadow-brand-gold/20 transition-all font-sans cursor-pointer"
              >
                Apply for Admissions <ArrowRight className="h-4 w-4" />
              </a>
              <button
                id="brochure-download-hero-btn"
                onClick={() => alert("The official HITM Ranchi BCA Syllabus (AI & Technology Specialization) Brochure is preparing. Your download will begin in 1 second...")}
                className="bg-brand-blue/40 hover:bg-brand-blue/60 text-white border border-brand-gold/30 font-semibold px-6 py-3 rounded-xl flex items-center gap-2 text-sm transition-all font-sans cursor-pointer"
              >
                Download Curriculum Brochure
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Floating admissions enrollment form */}
          <div className="lg:col-span-5 animate-slideInRight" id="hero-floating-form">
            <div className="sticky top-24">
              <InquiryForm onLeadSubmit={onLeadSubmit} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
