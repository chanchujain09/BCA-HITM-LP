export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  qualification: string;
  city: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Enrolled' | 'Rejected';
  notes?: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  education: string;
  avatar: string;
  background: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}
