import React from "react";
import useSEO from "../hooks/useSEO";
import DataTable from "../common/DataTable";
import { ShieldCheck, Award, CheckCircle } from "lucide-react";

export default function Qualitypage() {
  useSEO({
    title: "Quality Standards & Compliance – Sara SPA",
    description: "Quality benchmarks, hygiene audits, and standard operational tables for Sara SPA.",
    canonical: "/quality"
  });

  const qualityHeaders = [
    { key: "metricId", label: "Metric ID" },
    { key: "parameter", label: "Quality / Audit Check" },
    { key: "frequency", label: "Audit Interval" },
    { key: "targetScore", label: "Target" },
    { key: "latestScore", label: "Latest Result" },
    { key: "status", label: "Status" },
  ];

  const qualityData = [
    { metricId: "QC-01", parameter: "Sanitization & Hygiene Check", frequency: "Daily", targetScore: "100%", latestScore: "100%", status: "Active" },
    { metricId: "QC-02", parameter: "Product Expiry & Batch Verification", frequency: "Weekly", targetScore: "100%", latestScore: "99.8%", status: "Active" },
    { metricId: "QC-03", parameter: "Customer Satisfaction Index", frequency: "Monthly", targetScore: "> 4.8 / 5", latestScore: "4.9 / 5", status: "Active" },
    { metricId: "QC-04", parameter: "Therapist Certification Audit", frequency: "Quarterly", targetScore: "100%", latestScore: "100%", status: "Active" },
    { metricId: "QC-05", parameter: "Facility Temperature & Ambience", frequency: "Hourly", targetScore: "Optimal", latestScore: "Compliant", status: "Active" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-teal-600 font-bold text-xs uppercase tracking-wider">Assurance & Compliance</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Quality Benchmarks & Metrics</h1>
        <p className="text-slate-600 text-sm mt-1">
          Tabular breakdown of performance benchmarks, audit schedules, and compliance metrics.
        </p>
      </div>

      <DataTable
        title="Quality & Hygiene Metric Logs"
        description="Standard operating compliance data."
        headers={qualityHeaders}
        data={qualityData}
      />
    </div>
  );
}
