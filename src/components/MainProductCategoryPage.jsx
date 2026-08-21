import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import DataTable from "../common/DataTable";
import { spaTableData, spaTableHeaders, spaCategories } from "../data/tableData";
import { Grid, Layers, Filter } from "lucide-react";

export default function MainProductCategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useSEO({
    title: "Category Catalogue Table – Sara SPA",
    description: "Categorized service directory table and breakdown for Sara SPA.",
    canonical: "/products/frozen-vegetable-collection"
  });

  const filteredData = selectedCategory === "All"
    ? spaTableData
    : spaTableData.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <span className="text-teal-600 font-bold text-xs uppercase tracking-wider">Classification</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1">Category & Sub-Category Table View</h1>
        <p className="text-slate-600 text-sm mt-1">
          Select category filters to instantly filter the dataset below.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 pt-2">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            selectedCategory === "All"
              ? "bg-teal-600 text-white shadow-sm"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          All Categories ({spaTableData.length})
        </button>
        {["Therapy", "Facial", "Body Care", "Wellness", "Hydrotherapy"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-teal-600 text-white shadow-sm"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dynamic Filtered Table */}
      <DataTable
        title={`${selectedCategory} Service Records`}
        description={`Showing tabular data filtered by category: ${selectedCategory}`}
        headers={spaTableHeaders}
        data={filteredData}
      />
    </div>
  );
}
