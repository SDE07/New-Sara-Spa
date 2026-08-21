import React from 'react';

export default function Slider({ slides = [] }) {
  return (
    <div className="w-full bg-slate-900 text-white py-12 px-6 rounded-2xl">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-teal-400 text-xs uppercase font-bold tracking-widest">Sara SPA Slider</span>
        <h2 className="text-2xl md:text-3xl font-extrabold">Clean & Scalable Tabular Architecture</h2>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto">
          Tailored for high performance Single Page Application dashboards, data tables, and catalogue workflows.
        </p>
      </div>
    </div>
  );
}
