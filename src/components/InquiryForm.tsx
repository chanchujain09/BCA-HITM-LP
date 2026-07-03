import React, { useState } from 'react';
import { Send, FileText, Calendar, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';
import { Lead } from '../types';

interface InquiryFormProps {
  onLeadSubmit: (lead: Omit<Lead, 'id' | 'submittedAt' | 'status'>) => void;
}

export default function InquiryForm({ onLeadSubmit }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    qualification: 'Class 12th Student',
    city: 'Ranchi',
  });

  const [isEligible, setIsEligible] = useState(true);
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.city.trim()) newErrors.city = 'City/Town is required';
    if (!isEligible) newErrors.eligibility = 'Eligibility declaration is required';
    if (!agreedToTerms) newErrors.terms = 'Terms acceptance is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onLeadSubmit(formData);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      qualification: 'Class 12th Student',
      city: 'Ranchi',
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#f5f6f7] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-500 animate-fadeIn" id="success-lead-form">
        <div className="bg-emerald-600 px-6 py-8 text-white text-center relative">
          <div className="absolute top-4 right-4 text-emerald-300">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
          <div className="mx-auto bg-white/20 h-16 w-16 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          <h3 className="font-display font-bold text-xl md:text-2xl leading-tight">Inquiry Submitted!</h3>
          <p className="text-emerald-50 text-xs md:text-sm mt-2 font-sans font-light">
            Thank you, {formData.firstName}. Your interest in the BCA program at HITM has been recorded.
          </p>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl text-xs md:text-sm space-y-1.5 border border-emerald-100 font-sans">
            <p className="font-semibold text-emerald-800 flex items-center gap-1.5">
              <Award className="h-4 w-4" /> Next Steps For You:
            </p>
            <p className="text-gray-600 pl-5">1. Our IIT-faculty academic advisors will call you within 24 hours on <span className="font-semibold text-emerald-900">+91 {formData.phone}</span>.</p>
            <p className="text-gray-600 pl-5">2. Check your email <span className="font-semibold text-emerald-900">{formData.email}</span> for the comprehensive BCA syllabus, AI modules checklist & fee structure.</p>
          </div>

          <div className="space-y-3">
            <button
              id="success-download-syllabus-btn"
              onClick={() => alert("Downloading HITM BCA Curriculum (AI & Emerging Tech Edition).pdf...")}
              className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/25 transition-all cursor-pointer font-sans"
            >
              <FileText className="h-4 w-4" /> Download BCA Brochure
            </button>
            <button
              id="success-schedule-call-btn"
              onClick={() => alert("Scheduling interactive counseling session with our expert admissions guide.")}
              className="w-full bg-[#eef1f3] hover:bg-[#e1e4e6] text-gray-800 border border-gray-300 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-all cursor-pointer font-sans"
            >
              <Calendar className="h-4 w-4 text-gray-500" /> Book Academic Counselor
            </button>
          </div>

          <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-xs text-gray-500 font-sans">
            <span>Reference ID: HITM-BCA-{Math.floor(Math.random() * 90000 + 10000)}</span>
            <button
              onClick={handleReset}
              className="text-brand-blue font-semibold hover:underline bg-transparent border-0 cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#eef1f3] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden" id="inquiry-form">
      {/* Form Header */}
      <div className="bg-brand-blue px-6 py-5 text-white">
        <h3 className="font-display font-extrabold text-lg md:text-xl uppercase tracking-wider text-center text-brand-offwhite">
          APPLY FOR BCA PROGRAM
        </h3>
        <p className="text-brand-offwhite/80 text-xs md:text-sm text-center mt-1 font-sans font-light">
          Get program fees, syllabus details & admission counseling
        </p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1 font-sans">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="e.g. Rahul"
              className={`w-full border rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all font-sans bg-[#f5f6f7] ${
                errors.firstName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
              }`}
            />
            {errors.firstName && <p className="text-[10px] text-red-600 mt-1 font-sans">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1 font-sans">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="e.g. Kumar"
              className={`w-full border rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all font-sans bg-[#f5f6f7] ${
                errors.lastName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
              }`}
            />
            {errors.lastName && <p className="text-[10px] text-red-600 mt-1 font-sans">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1 font-sans">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. rahul.kumar@gmail.com"
            className={`w-full border rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all font-sans bg-[#f5f6f7] ${
              errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
            }`}
          />
          {errors.email && <p className="text-[10px] text-red-600 mt-1 font-sans">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1 font-sans">Phone Number *</label>
          <div className="relative">
            {/* Country flag and code simulator */}
            <div className="absolute left-3.5 top-2.5 flex items-center gap-1.5 pr-2.5 border-r border-gray-200 select-none">
              <span className="text-sm">🇮🇳</span>
              <span className="text-xs md:text-sm font-semibold text-gray-700">+91</span>
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="91234 56789"
              className={`w-full border rounded-xl pl-[72px] pr-3.5 py-2.5 text-sm outline-none transition-all font-sans bg-[#f5f6f7] ${
                errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
              }`}
            />
          </div>
          {errors.phone ? (
            <p className="text-[10px] text-red-600 mt-1 font-sans">{errors.phone}</p>
          ) : (
            <p className="text-[9px] text-gray-400 mt-1 font-sans pl-1">For communication with advisors</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1 font-sans">Qualification Status *</label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              className="w-full border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 rounded-xl px-3.5 py-2.5 text-sm outline-none bg-[#f5f6f7] transition-all font-sans text-gray-700"
            >
              <option value="Class 12th Student">Class 12th Student</option>
              <option value="Class 12th Passed">Class 12th Passed</option>
              <option value="Graduate / Other">Diploma Holder</option>
              <option value="Graduate / Other">Other Academic background</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1 font-sans">City / Location *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="e.g. Ranchi"
              className={`w-full border rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all font-sans bg-[#f5f6f7] ${
                errors.city ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20'
              }`}
            />
            {errors.city && <p className="text-[10px] text-red-600 mt-1 font-sans">{errors.city}</p>}
          </div>
        </div>

        {/* Checkbox criteria */}
        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isEligible}
              onChange={(e) => setIsEligible(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue cursor-pointer"
            />
            <span className="text-xs text-gray-500 font-sans font-light leading-snug">
              I am a Class 12th student/pass with min. 50% marks *
            </span>
          </label>
          {errors.eligibility && <p className="text-[10px] text-red-600 font-sans leading-none">{errors.eligibility}</p>}

          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue cursor-pointer"
            />
            <span className="text-xs text-gray-500 font-sans font-light leading-snug">
              I agree to receive communications regarding HITM admissions and course details. *
            </span>
          </label>
          {errors.terms && <p className="text-[10px] text-red-600 font-sans leading-none">{errors.terms}</p>}
        </div>

        <button
          id="submit-lead-btn"
          type="submit"
          className="w-full bg-brand-gold hover:bg-brand-gold/90 active:scale-[0.99] text-brand-dark font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold/30 transition-all cursor-pointer font-sans"
        >
          <Send className="h-4 w-4" /> SUBMIT APPLICATION
        </button>
      </form>
    </div>
  );
}
