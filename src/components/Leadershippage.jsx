import React from "react";
import useSEO from "../hooks/useSEO";
import DataTable from "../common/DataTable";
import { Users, Briefcase, Award } from "lucide-react";

export default function Leadershippage() {
  useSEO({
    title: "Leadership & Staff Directory – Sara SPA",
    description: "Management board, therapists, and certified specialist directory table for Sara SPA.",
    canonical: "/leadership"
  });

  const staffHeaders = [
    { key: "staffId", label: "Staff ID" },
    { key: "name", label: "Full Name" },
    { key: "role", label: "Designation / Specialty" },
    { key: "experience", label: "Experience" },
    { key: "certifications", label: "Certifications" },
    { key: "status", label: "Status" },
  ];

  const staffData = [
    { staffId: "EMP-01", name: "Dr. Elena Rostova", role: "Chief Wellness Officer", experience: "16 Years", certifications: "MD, Board Certified Holistics", status: "Active" },
    { staffId: "EMP-02", name: "Marcus Sterling", role: "Head of Operations", experience: "12 Years", certifications: "MBA, Hospitality Leader", status: "Active" },
    { staffId: "EMP-03", name: "Sarah Jenkins", role: "Lead Aesthetician", experience: "9 Years", certifications: "CIDESCO International", status: "Active" },
    { staffId: "EMP-04", name: "Hiroshi Tanaka", role: "Master Shiatsu Practitioner", experience: "14 Years", certifications: "Japan Shiatsu Association", status: "Active" },
    { staffId: "EMP-05", name: "Amara Patel", role: "Ayurvedic Specialist", experience: "8 Years", certifications: "BAMS Certified", status: "Active" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-teal-600 font-bold text-xs uppercase tracking-wider">Personnel Directory</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Therapist & Leadership Table</h1>
        <p className="text-slate-600 text-sm mt-1">
          Registered practitioners, credentials, and organizational management roster.
        </p>
      </div>

      <DataTable
        title="Specialist Staff & Leadership Registry"
        description="All practitioners and certified professionals."
        headers={staffHeaders}
        data={staffData}
      />
    </div>
  );
}
