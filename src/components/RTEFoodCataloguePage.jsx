import React from "react";
import useSEO from "../hooks/useSEO";
import DataTable from "../common/DataTable";
import { spaTableData, spaTableHeaders } from "../data/tableData";
import { Package, CheckSquare, Layers } from "lucide-react";

export default function RTEFoodCataloguePage() {
  useSEO({
    title: "Catalogue Management Table – Sara SPA",
    description: "Full service and product master catalogue with price tracking and duration metrics.",
    canonical: "/products/rte-food-products"
  });

  const packageHeaders = [
    { key: "id", label: "SKU / Code" },
    { key: "name", label: "Package Title" },
    { key: "category", label: "Type" },
    { key: "duration", label: "Time Req." },
    { key: "price", label: "Base Rate ($)" },
    { key: "status", label: "Availability" },
    { key: "action", label: "Controls" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-teal-600 font-bold text-xs uppercase tracking-wider">Service Master</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Comprehensive Catalogue Index</h1>
        <p className="text-slate-600 text-sm mt-1">
          Standardized tabular schema for fast lookups, inventory, and spa booking logs.
        </p>
      </div>

      <DataTable
        title="Catalogue Index & Rate Card"
        description="Master index of treatments and wellness procedures."
        headers={packageHeaders}
        data={spaTableData}
      />
    </div>
  );
}
