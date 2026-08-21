import React from 'react';
import { Sparkles, Clock, Check, Star } from 'lucide-react';

export default function ProductCard({ item = {}, onView }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-100">
            {item.category || "Service"}
          </span>
          <div className="flex items-center gap-1 text-amber-500 text-xs font-medium">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{item.rating || "5.0"}</span>
          </div>
        </div>
        <h3 className="text-base font-bold text-slate-900 line-clamp-1">{item.name || "Spa Service Package"}</h3>
        <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
          <Clock className="w-3.5 h-3.5" />
          <span>{item.duration || "60 mins"}</span>
          <span>•</span>
          <span className="text-slate-700 font-semibold">${item.price || "80"}</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">ID: {item.id || "SR-000"}</span>
        <button
          onClick={() => onView && onView(item)}
          className="text-xs font-semibold text-teal-600 hover:text-teal-700 hover:underline"
        >
          View Details →
        </button>
      </div>
    </div>
  );
}
