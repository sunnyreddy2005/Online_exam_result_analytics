import React from 'react';
import { ArchitectureFlow } from '@/components/architecture/ArchitectureFlow';

export default function ArchitecturePage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">System Architecture</h2>
        <p className="text-slate-500 mt-1">Data pipeline from raw inputs to interactive visualizations.</p>
      </div>

      <div className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-sm">
        <ArchitectureFlow />
      </div>
    </div>
  );
}
