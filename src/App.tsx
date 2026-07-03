import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DifferentSection from './components/DifferentSection';
import EnrollmentSection from './components/EnrollmentSection';
import OpportunitiesSection from './components/OpportunitiesSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import AdminLeads from './components/AdminLeads';
import { Lead } from './types';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [leads, setLeads] = useState<Lead[]>(() => {
    const saved = localStorage.getItem('hitm_bca_leads');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved leads:', e);
      }
    }
    // Pre-populate with realistic sample leads for immediate dashboard utility
    return [
      {
        id: 'lead-1',
        firstName: 'Ankit',
        lastName: 'Mahto',
        email: 'ankit.mahto@gmail.com',
        phone: '9123450987',
        qualification: 'Class 12th Student',
        city: 'Ranchi',
        submittedAt: new Date(Date.now() - 3600000 * 3).toISOString(), // 3 hours ago
        status: 'New'
      },
      {
        id: 'lead-2',
        firstName: 'Simran',
        lastName: 'Kujur',
        email: 'simran.kujur@outlook.com',
        phone: '9876541230',
        qualification: 'Class 12th Passed',
        city: 'Jamshedpur',
        submittedAt: new Date(Date.now() - 3600000 * 28).toISOString(), // ~1 day ago
        status: 'Contacted',
        notes: 'Called. Enthusiastic about AI modules. Scheduled campus tour on Saturday.'
      }
    ];
  });

  // Sync leads state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('hitm_bca_leads', JSON.stringify(leads));
  }, [leads]);

  // Handler for adding a new lead
  const handleLeadSubmit = (newLeadData: Omit<Lead, 'id' | 'submittedAt' | 'status'>) => {
    const newLead: Lead = {
      ...newLeadData,
      id: `lead-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'New'
    };
    setLeads((prev) => [newLead, ...prev]);
  };

  // Handler to update a lead's workflow status
  const handleUpdateStatus = (id: string, status: Lead['status']) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  };

  // Handler to add admin/counselor notes
  const handleAddNotes = (id: string, notes: string) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, notes } : lead))
    );
  };

  // Handler to delete a lead
  const handleDeleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-red-700 selection:text-white" id="main-app-container">
      {/* Universal Header with live leads status */}
      <Header 
        onAdminToggle={() => setIsAdminOpen(!isAdminOpen)} 
        isAdminOpen={isAdminOpen}
        totalLeads={leads.length}
      />

      <main className="grow">
        {/* Conditional Leads Management Admin Drawer */}
        {isAdminOpen && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn" id="admin-panel-drawer">
            <AdminLeads
              leads={leads}
              onUpdateStatus={handleUpdateStatus}
              onAddNotes={handleAddNotes}
              onDeleteLead={handleDeleteLead}
              onClose={() => setIsAdminOpen(false)}
            />
          </div>
        )}

        {/* Primary Hero Section featuring core information & enrollment form */}
        <HeroSection onLeadSubmit={handleLeadSubmit} />

        {/* Why HITM's BCA is Built Different - The academic & program blueprints */}
        <DifferentSection />

        {/* Who Should Enroll & Eligibility section */}
        <EnrollmentSection />

        {/* Job Opportunities After BCA */}
        <OpportunitiesSection />

        {/* Supplementary Section: Admissions Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Corporate University footer */}
      <Footer />
    </div>
  );
}
