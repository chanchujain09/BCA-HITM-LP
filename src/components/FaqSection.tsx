import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "1. What is the duration of the BCA program at HITM Ranchi?",
      answer: "BCA at HITM Ranchi is a 3-year undergraduate program spread across 6 semesters."
    },
    {
      question: "2. Is the BCA program AICTE approved?",
      answer: "Yes. HITM Ranchi holds AICTE approval — among the largest approvals granted to a newly affiliated institution in India."
    },
    {
      question: "3. Who teaches the BCA program?",
      answer: "BCA at HITM Ranchi is guided by IIT-associated faculty — bringing real academic excellence and industry insight into every class."
    },
    {
      question: "4. What is the eligibility for BCA admission?",
      answer: "10+2 (Any Stream) with minimum 45% marks from a recognised board."
    },
    {
      question: "5. What programming languages will I learn?",
      answer: "Students work with C++, Java, Python, React, Node.js and more — built around modern industry-standard tech stacks."
    },
    {
      question: "6. What makes HITM's BCA different from other colleges?",
      answer: "HITM is Jharkhand's most dedicated Technology & Management Campus — focused exclusively on professional and career-oriented education, with an AI & emerging tech curriculum guided by IIT faculty."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-brand-offwhite font-sans relative overflow-hidden">
      {/* Decorative Brand Accent Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="h-4 w-4 text-brand-blue" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-brand-blue font-display">
              Admission Guidance
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-lg mx-auto">
            Everything you need to know about the admissions, duration, eligibility, and core academic pillars at HITM Ranchi.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`bg-[#eef1f3]/50 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-gold/30 bg-[#eef1f3] shadow-xl shadow-brand-gold/5' : 'border-gray-200 hover:border-brand-blue/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`h-5 w-5 mt-0.5 shrink-0 transition-colors duration-200 ${isOpen ? 'text-brand-gold' : 'text-brand-blue group-hover:text-brand-gold'}`} />
                    <span className={`font-bold text-sm sm:text-base leading-snug font-display transition-colors duration-200 ${isOpen ? 'text-brand-blue' : 'text-gray-900 group-hover:text-brand-blue'}`}>
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-brand-gold shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-brand-gray shrink-0 group-hover:text-brand-blue" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-brand-offwhite/80 animate-fade-in font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom micro prompt */}
        <div className="text-center mt-12 font-sans text-xs text-gray-500">
          Still have questions? Chat with our Admissions Desk at <a href="tel:+919123456789" className="text-brand-gold font-bold hover:text-brand-blue transition-colors">+91 91234 56789</a> or email us at <a href="mailto:admissions@hitm.edu.in" className="text-brand-gold font-bold hover:text-brand-blue transition-colors">admissions@hitm.edu.in</a>.
        </div>

      </div>
    </section>
  );
}
