import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Eye, Edit2, Trash2, CheckCircle2, Clock, XCircle, Sparkles } from 'lucide-react';

export default function DataTable({
  title = "Spa Service & Management Directory",
  description = "Filter, search and review treatment schedules and logs in clean tabular format.",
  headers = [],
  data = [],
  onView,
  onEdit,
  onDelete,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredData = data.filter((item) => {
    const matchesSearch = Object.values(item).some(
      (val) => String(val).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':
      case 'confirmed':
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#EBF7EE] text-[#1E7B34] border border-[#BDE8C6]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {status}
          </span>
        );
      case 'pending':
      case 'in progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FDF4E6] text-[#A66107] border border-[#F6D8A8]">
            <Clock className="w-3.5 h-3.5" />
            {status}
          </span>
        );
      case 'inactive':
      case 'cancelled':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FDE8E8] text-[#9E1C1C] border border-[#F8B4B4]">
            <XCircle className="w-3.5 h-3.5" />
            {status}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#F5EFE6] text-[#6B5A4E]">
            {status || '-'}
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-[#EFE6DC] overflow-hidden">
      {/* Header & Controls */}
      <div className="p-6 md:p-8 border-b border-[#F0E6DA] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FAF7F2]/60">
        <div>
          <div className="flex items-center gap-2 text-[#8C6A43] text-xs font-semibold uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dataset Schema</span>
          </div>
          <h2 className="text-xl md:text-2xl font-serif-luxury font-bold text-[#2D241E] tracking-tight">{title}</h2>
          <p className="text-xs sm:text-sm text-[#6B5A4E] mt-1">{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7364]" />
            <input
              type="text"
              placeholder="Search records..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-[#E5D6C4] rounded-xl text-[#2D241E] placeholder-[#9E8A7C] focus:outline-none focus:border-[#C59B6D] transition-colors"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-2 text-xs sm:text-sm bg-white border border-[#E5D6C4] rounded-xl text-[#4A3B32] focus:outline-none focus:border-[#C59B6D] transition-colors"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active / Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive / Cancelled</option>
          </select>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FAF7F2] border-b border-[#EFE6DC] text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8C6A43]">
              {headers.map((head, idx) => (
                <th key={idx} className="py-4 px-4 first:pl-6 last:pr-6 whitespace-nowrap">
                  {head.label || head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F5EFE6] text-xs sm:text-sm text-[#4A3B32]">
            {displayedItems.length > 0 ? (
              displayedItems.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-[#FAF7F2]/80 transition-colors group">
                  {headers.map((head, colIndex) => {
                    const key = head.key || head;
                    if (key === 'status') {
                      return (
                        <td key={colIndex} className="py-4 px-4 first:pl-6 last:pr-6 whitespace-nowrap">
                          {getStatusBadge(row[key])}
                        </td>
                      );
                    }
                    if (key === 'action' || key === 'actions') {
                      return (
                        <td key={colIndex} className="py-4 px-4 first:pl-6 last:pr-6 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onView && onView(row)}
                              className="p-1.5 text-[#6B5A4E] hover:text-[#B07D54] hover:bg-[#F5EFE6] rounded-lg transition-colors"
                              title="View"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => onEdit && onEdit(row)}
                              className="p-1.5 text-[#6B5A4E] hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => onDelete && onDelete(row)}
                              className="p-1.5 text-[#6B5A4E] hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      );
                    }
                    return (
                      <td key={colIndex} className="py-4 px-4 first:pl-6 last:pr-6 whitespace-nowrap font-medium text-[#2D241E]">
                        {row[key] !== undefined ? String(row[key]) : '-'}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length || 1} className="py-12 text-center text-[#8C7364] text-sm">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-5 border-t border-[#F0E6DA] flex items-center justify-between text-xs text-[#6B5A4E] bg-[#FAF7F2]/40">
        <div>
          Showing <span className="font-semibold text-[#2D241E]">{filteredData.length > 0 ? startIndex + 1 : 0}</span> to{' '}
          <span className="font-semibold text-[#2D241E]">
            {Math.min(startIndex + itemsPerPage, filteredData.length)}
          </span>{' '}
          of <span className="font-semibold text-[#2D241E]">{filteredData.length}</span> entries
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl border border-[#E5D6C4] bg-white text-[#4A3B32] hover:bg-[#F5EFE6] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-3 py-1 font-medium text-[#8C6A43] bg-white rounded-xl border border-[#E5D6C4]">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl border border-[#E5D6C4] bg-white text-[#4A3B32] hover:bg-[#F5EFE6] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
