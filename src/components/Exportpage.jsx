import React from "react";
import useSEO from "../hooks/useSEO";
import DataTable from "../common/DataTable";
import { Globe, MapPin, Building } from "lucide-react";

export default function Exportpage() {
  useSEO({
    title: "Branch & Partner Directory – Sara SPA",
    description: "Multi-location branch directory and international partner network table for Sara SPA.",
    canonical: "/export"
  });

  const branchHeaders = [
    { key: "code", label: "Branch Code" },
    { key: "location", label: "City / Region" },
    { key: "country", label: "Country" },
    { key: "rooms", label: "Treatment Suites" },
    { key: "manager", label: "Branch Lead" },
    { key: "status", label: "Status" },
  ];

  const branchData = [
    { code: "SPA-NY", location: "Manhattan, New York", country: "United States", rooms: 14, manager: "Rebecca Thorne", status: "Active" },
    { code: "SPA-LDN", location: "Mayfair, London", country: "United Kingdom", rooms: 10, manager: "Arthur Pendelton", status: "Active" },
    { code: "SPA-DXB", location: "Downtown Dubai", country: "UAE", rooms: 20, manager: "Zainab Al-Mansoor", status: "Active" },
    { code: "SPA-TYO", location: "Ginza, Tokyo", country: "Japan", rooms: 12, manager: "Kenji Sato", status: "Active" },
    { code: "SPA-SYD", location: "Sydney Harbour", country: "Australia", rooms: 16, manager: "Chloe Davis", status: "Active" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-teal-600 font-bold text-xs uppercase tracking-wider">Global Footprint</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Branch & Partner Locations Table</h1>
        <p className="text-slate-600 text-sm mt-1">
          Full directory of international spa suites, locations, and branch management.
        </p>
      </div>

      <DataTable
        title="International Branches & Facilities"
        description="Comprehensive location registry and status logs."
        headers={branchHeaders}
        data={branchData}
      />
    </div>
  );
}
