import React from "react";
import useSEO from "../hooks/useSEO";
import DataTable from "../common/DataTable";
import { spaTableHeaders, spaTableData } from "../data/tableData";
import { Table, Plus, Download, Filter } from "lucide-react";

export default function Productpage() {
  useSEO({
    title: "Services & Products Table – Sara SPA",
    description: "Complete list of spa services, treatment packages, duration, and pricing in structured data format.",
    canonical: "/products"
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-800 to-emerald-900 rounded-2xl p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
        <div>
          <span className="text-teal-300 font-semibold text-xs uppercase tracking-wider">Catalog & Inventory</span>
          <h1 className="text-3xl font-extrabold mt-1">Service & Product Directory</h1>
          <p className="text-teal-100 text-sm mt-2 max-w-xl">
            Structured table layout for rapid searching, status updates, filtering, and record management.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => alert("Exporting data as CSV...")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => alert("Add new service entry")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 text-sm font-bold transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Item</span>
          </button>
        </div>
      </div>

      {/* Main Table Component */}
      <DataTable
        title="Complete Services Dataset"
        description="Search by service name, category, or filter by active status."
        headers={spaTableHeaders}
        data={spaTableData}
      />
    </div>
  );
}
