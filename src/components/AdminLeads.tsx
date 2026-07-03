import React, { useState } from 'react';
import { 
  Users, Search, Filter, Download, Trash2, 
  MessageSquare, UserCheck, RefreshCw, X, Calendar 
} from 'lucide-react';
import { Lead } from '../types';

interface AdminLeadsProps {
  leads: Lead[];
  onUpdateStatus: (id: string, status: Lead['status']) => void;
  onAddNotes: (id: string, notes: string) => void;
  onDeleteLead: (id: string) => void;
  onClose: () => void;
}

export default function AdminLeads({ 
  leads, 
  onUpdateStatus, 
  onAddNotes, 
  onDeleteLead, 
  onClose 
}: AdminLeadsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [activeNotesId, setActiveNotesId] = useState<string | null>(null);
  const [notesText, setNotesText] = useState('');

  // Filtering logic
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      `${lead.firstName} ${lead.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.city.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const totalCount = leads.length;
  const newCount = leads.filter((l) => l.status === 'New').length;
  const contactedCount = leads.filter((l) => l.status === 'Contacted').length;
  const enrolledCount = leads.filter((l) => l.status === 'Enrolled').length;

  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('No leads to export.');
      return;
    }
    const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'Qualification', 'City', 'Submitted At', 'Status', 'Counselor Notes'];
    const rows = leads.map(l => [
      l.firstName, l.lastName, l.email, l.phone, l.qualification, l.city, l.submittedAt, l.status, l.notes || ''
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `HITM_Ranchi_BCA_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveNotes = (id: string) => {
    onAddNotes(id, notesText);
    setActiveNotesId(null);
    setNotesText('');
  };

  const startEditingNotes = (lead: Lead) => {
    setActiveNotesId(lead.id);
    setNotesText(lead.notes || '');
  };

  return (
    <div className="bg-[#132334] text-brand-offwhite rounded-2xl shadow-2xl border border-brand-blue/30 p-6 md:p-8 space-y-6" id="leads-admin-dashboard">
      {/* Top Banner */}
      <div className="flex justify-between items-start border-b border-[#1d354e] pb-5">
        <div>
          <h3 className="font-display font-bold text-xl md:text-2xl flex items-center gap-2 text-white">
            <Users className="h-6 w-6 text-brand-gold" /> Admissions Admin Dashboard
          </h3>
          <p className="text-brand-offwhite/70 text-xs md:text-sm font-sans mt-1">
            Review and manage student inquiries for HITM Ranchi's BCA Program.
          </p>
        </div>
        <button 
          onClick={onClose}
          className="bg-[#1d354e] hover:bg-brand-blue p-1.5 rounded-full text-brand-offwhite/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-brand-blue p-4 rounded-xl border border-brand-blue/40">
          <p className="text-[10px] text-brand-offwhite/60 uppercase tracking-wider font-semibold">Total Leads</p>
          <p className="font-display font-bold text-2xl text-brand-gold mt-1">{totalCount}</p>
        </div>
        <div className="bg-brand-blue p-4 rounded-xl border border-brand-blue/40">
          <p className="text-[10px] text-brand-offwhite/60 uppercase tracking-wider font-semibold">New / Unaddressed</p>
          <p className="font-display font-bold text-2xl text-yellow-400 mt-1">{newCount}</p>
        </div>
        <div className="bg-brand-blue p-4 rounded-xl border border-brand-blue/40">
          <p className="text-[10px] text-brand-offwhite/60 uppercase tracking-wider font-semibold">Contacted Leads</p>
          <p className="font-display font-bold text-2xl text-blue-400 mt-1">{contactedCount}</p>
        </div>
        <div className="bg-brand-blue p-4 rounded-xl border border-brand-blue/40">
          <p className="text-[10px] text-brand-offwhite/60 uppercase tracking-wider font-semibold">Enrolled Ratio</p>
          <p className="font-display font-bold text-2xl text-emerald-400 mt-1">
            {totalCount > 0 ? `${Math.round((enrolledCount / totalCount) * 100)}%` : '0%'}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-brand-blue p-4 rounded-xl border border-brand-blue/40">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-offwhite/50" />
          <input
            type="text"
            placeholder="Search leads (name, email, city...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#132334] border border-[#1d354e] focus:border-brand-gold rounded-lg pl-9 pr-4 py-2 text-xs md:text-sm outline-none transition-all placeholder:text-brand-offwhite/30 font-sans text-white"
          />
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="flex items-center gap-1.5 bg-[#132334] px-3 py-2 rounded-lg border border-[#1d354e]">
            <Filter className="h-3.5 w-3.5 text-brand-offwhite/50" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent text-xs text-brand-offwhite/80 outline-none border-none cursor-pointer font-sans"
            >
              <option value="all" className="bg-[#132334]">All Statuses</option>
              <option value="New" className="bg-[#132334]">New</option>
              <option value="Contacted" className="bg-[#132334]">Contacted</option>
              <option value="Enrolled" className="bg-[#132334]">Enrolled</option>
              <option value="Rejected" className="bg-[#132334]">Rejected</option>
            </select>
          </div>

          <button
            onClick={handleExportCSV}
            className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer shadow"
          >
            <Download className="h-3.5 w-3.5" /> Export CSV
          </button>
        </div>
      </div>

      {/* Leads List/Table */}
      <div className="overflow-x-auto border border-[#1d354e] rounded-xl bg-brand-blue/60">
        {filteredLeads.length === 0 ? (
          <div className="p-8 text-center text-brand-offwhite/60 font-sans text-sm">
            No leads match your search or filter. Submit an inquiry above to see it dynamically appear here in real time!
          </div>
        ) : (
          <table className="w-full text-left border-collapse font-sans text-xs md:text-sm">
            <thead>
              <tr className="border-b border-[#1d354e] bg-[#132334]/40 text-brand-offwhite/60 font-semibold text-xs">
                <th className="p-4">Student</th>
                <th className="p-4">Contact Info</th>
                <th className="p-4">Details</th>
                <th className="p-4">Workflow Status</th>
                <th className="p-4">Notes & Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1d354e]">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[#132334]/30 transition-colors">
                  {/* Student profile info */}
                  <td className="p-4">
                    <div className="font-bold text-white text-sm">
                      {lead.firstName} {lead.lastName}
                    </div>
                    <div className="text-[10px] text-brand-offwhite/50 mt-1 flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-brand-offwhite/50" />
                      {new Date(lead.submittedAt).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </td>

                  {/* Contact details */}
                  <td className="p-4 space-y-0.5">
                    <div className="text-brand-offwhite/80 font-mono text-xs">{lead.email}</div>
                    <div className="text-brand-offwhite/60 font-semibold">{lead.phone}</div>
                  </td>

                  {/* Qualification & City */}
                  <td className="p-4">
                    <div className="text-brand-offwhite/80 font-medium">{lead.qualification}</div>
                    <div className="text-brand-offwhite/50 text-xs mt-0.5">City: {lead.city}</div>
                  </td>

                  {/* Workflow status dropdown */}
                  <td className="p-4">
                    <select
                      value={lead.status}
                      onChange={(e) => onUpdateStatus(lead.id, e.target.value as Lead['status'])}
                      className={`text-xs font-bold px-2 py-1 rounded-full outline-none border transition-all cursor-pointer ${
                        lead.status === 'New' 
                          ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' 
                          : lead.status === 'Contacted'
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                          : lead.status === 'Enrolled'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-brand-offwhite/10 text-brand-offwhite/60 border-brand-offwhite/30'
                      }`}
                    >
                      <option value="New" className="bg-[#132334]">New</option>
                      <option value="Contacted" className="bg-[#132334]">Contacted</option>
                      <option value="Enrolled" className="bg-[#132334]">Enrolled</option>
                      <option value="Rejected" className="bg-[#132334]">Rejected</option>
                    </select>
                  </td>

                  {/* Counselor notes + delete action */}
                  <td className="p-4 space-y-1">
                    {activeNotesId === lead.id ? (
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          value={notesText}
                          onChange={(e) => setNotesText(e.target.value)}
                          placeholder="e.g. Schedule call for Monday..."
                          className="bg-[#132334] text-xs text-white border border-[#1d354e] rounded px-2 py-1 outline-none w-48"
                        />
                        <button
                          onClick={() => handleSaveNotes(lead.id)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold px-2 py-1 rounded"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        {lead.notes ? (
                          <div className="text-xs text-brand-offwhite/70 italic max-w-[180px] truncate bg-[#132334]/50 px-2 py-1 rounded border border-[#1d354e]">
                            "{lead.notes}"
                          </div>
                        ) : (
                          <button
                            onClick={() => startEditingNotes(lead)}
                            className="text-[10px] text-brand-offwhite/60 hover:text-brand-gold font-semibold flex items-center gap-1"
                          >
                            <MessageSquare className="h-3 w-3" /> Add note
                          </button>
                        )}
                        
                        {lead.notes && (
                          <button
                            onClick={() => startEditingNotes(lead)}
                            className="text-[10px] text-brand-gold hover:underline"
                          >
                            Edit
                          </button>
                        )}

                        <button
                          onClick={() => {
                            if (confirm('Are you sure you want to delete this lead?')) {
                              onDeleteLead(lead.id);
                            }
                          }}
                          className="text-brand-offwhite/40 hover:text-red-500 p-1 rounded hover:bg-[#132334] transition-colors ml-auto"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
